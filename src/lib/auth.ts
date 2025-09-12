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
      const allowedEmails = process.env.AUTHORIZED_ADMIN_EMAILS?.split(',') || [];
      
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
    signIn: '/admin-login',
    error: '/admin/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
}