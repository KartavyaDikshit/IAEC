<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# look into the github repo [https://github.com/KartavyaDikshit/IAEC](https://github.com/KartavyaDikshit/IAEC) again i have pushed the latest changes onto it and then troubleshoot the admin dashboard access i am unable to access the admin dashboard or login page or anything i made the google oauth client and all but havent mapped the uri yet, help me fix and access the admin dashboard and test it's working

I can see the issues! The admin login page is showing blank because there are several problems with the authentication setup and missing components. Let me help you fix this step by step.

## 🔍 **Issues Identified:**

1. **Missing SessionProvider** in root layout
2. **Incorrect Google OAuth environment variables**
3. **Missing NextAuth configuration**
4. **Google OAuth redirect URI not configured**
5. **Missing admin route components**

## 🛠️ **Step-by-Step Fix:**

### **Step 1: Fix Root Layout for Authentication**

Update `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SessionProviderWrapper from '@/components/SessionProviderWrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IAEC Consultants",
  description: "Your Global Study Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper>
          <Header />
          {children}
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
```


### **Step 2: Create SessionProviderWrapper Component**

Create `src/components/SessionProviderWrapper.tsx`:

```tsx
'use client'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SessionProviderWrapper({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>
}
```


### **Step 3: Fix Environment Variables**

Create/update `.env.local` file in your root directory:

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-here-make-it-long-and-random
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
AUTHORIZED_ADMIN_EMAILS=your-email@gmail.com,admin@iaecconsultants.com
```


### **Step 4: Fix NextAuth API Route**

Update `src/app/api/auth/[...nextauth]/route.ts`:

```typescript
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const authorizedEmails = process.env.AUTHORIZED_ADMIN_EMAILS?.split(',') || [];
      return authorizedEmails.includes(user.email as string);
    },
  },
  pages: {
    signIn: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
```


### **Step 5: Fix Auth Configuration**

Update `src/lib/auth.ts`:

```typescript
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async signIn({ user }) {
      const allowedEmails = [
        "admin@iaecconsultants.com",
        "kartavya@iaecconsultants.com",
        // Add your email here
      ]
      
      if (user.email && allowedEmails.includes(user.email)) {
        return true
      }
      return false
    },
    async session({ session }) {
      return session
    }
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
```


### **Step 6: Fix Admin Login Page**

Update `src/app/admin/login/page.tsx`:

```tsx
'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function AdminLogin() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (session) {
      router.push('/admin')
    }
  }, [session, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#08bcb4]"></div>
      </div>
    )
  }

  if (session) {
    return null // Will redirect
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    setError('')
    try {
      const result = await signIn('google', { 
        callbackUrl: '/admin',
        redirect: false 
      })
      
      if (result?.error) {
        setError('Sign in failed. Please make sure you\'re using an authorized email.')
      }
    } catch (error) {
      setError('An error occurred during sign in.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#08bcb4] mb-2">IAEC Admin</h1>
          <p className="text-gray-600">Sign in to manage content</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#08bcb4]"></div>
            ) : (
              <>
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </>
            )}
          </button>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            Only authorized IAEC staff can access this panel
          </div>
        </div>
      </div>
    </div>
  )
}
```


### **Step 7: Google Cloud Console Setup**

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Create a new project or select existing one**
3. **Enable Google+ API:**
    - Go to "APIs \& Services" > "Library"
    - Search for "Google+ API" and enable it
4. **Create OAuth 2.0 Credentials:**
    - Go to "APIs \& Services" > "Credentials"
    - Click "Create Credentials" > "OAuth 2.0 Client IDs"
    - Application type: "Web application"
    - Name: "IAEC Admin"
    - **Authorized JavaScript origins:**
        - `http://localhost:3000`
    - **Authorized redirect URIs:**
        - `http://localhost:3000/api/auth/callback/google`
5. **Copy Client ID and Client Secret to your `.env.local`**

### **Step 8: Install Missing Dependencies**

```bash
npm install next-auth
```


### **Step 9: Restart Development Server**

```bash
npm run dev
```


### **Step 10: Test the Login**

1. **Navigate to:** `http://localhost:3000/admin/login`
2. **Click "Continue with Google"**
3. **Sign in with your authorized Google account**
4. **You should be redirected to the admin dashboard**

## 🚨 **Important Notes:**

1. **Replace `your-email@gmail.com`** in the environment variables with your actual Gmail address
2. **The Google OAuth setup is crucial** - make sure the redirect URI is exactly: `http://localhost:3000/api/auth/callback/google`
3. **Use a strong NEXTAUTH_SECRET** (at least 32 characters)

## 🔧 **If Still Not Working:**

1. **Check browser console** for JavaScript errors
2. **Check terminal** for server errors
3. **Verify environment variables** are loaded correctly
4. **Make sure your email** is in the authorized list

Try this setup and let me know what happens! The admin login should work after these fixes.
<span style="display:none">[^1][^2][^3][^4][^5][^6][^7][^8]</span>

<div style="text-align: center">⁂</div>

[^1]: image.jpg

[^2]: https://github.com/KartavyaDikshit/IAEC

[^3]: https://github.com/KartavyaDikshit/IAEC/blob/master/src/app/admin/login/page.tsx

[^4]: https://github.com/KartavyaDikshit/IAEC/blob/master/src/app/admin/layout.tsx

[^5]: https://github.com/KartavyaDikshit/IAEC/blob/master/src/app/api/auth/[...nextauth]/route.ts

[^6]: https://github.com/KartavyaDikshit/IAEC/blob/master/admin-dashboard-spec.md

[^7]: https://github.com/KartavyaDikshit/IAEC/blob/master/missing-admin-components.md

[^8]: https://github.com/KartavyaDikshit/IAEC/tree/master/src/app/api/admin

