import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'

interface Blog {
  id: string
  title: string
  slug?: string
  content: string
  author: string
  imageUrl: string
}

async function getBlogs(): Promise<Blog[]> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'blogs.json')
    if (!fs.existsSync(filePath)) {
      return []
    }
    const fileData = fs.readFileSync(filePath, 'utf8')
    const parsedData = JSON.parse(fileData)
    // Map blog id to string if it's not
    return (parsedData.blogs || parsedData || []).map((blog: any) => ({
      ...blog,
      id: String(blog.id)
    }))
  } catch (error) {
    console.error('Error reading blogs:', error)
    return []
  }
}

const stripHtml = (html: string) => {
  if (!html) return '';
  const text = html.replace(/<[^>]*>?/gm, '');
  // Remove "Introduction" header text if it appears at the start
  return text.replace(/^Introduction\s*/i, '');
};

export const metadata = {
  title: 'Blog | IAEC Consultants',
  description: 'Read the latest insights, news, and updates about studying abroad from IAEC Consultants.',
};

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/all_images/blog.jpeg"
            alt="Blog"
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
          <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">Latest Insights & Updates</h1>
          <p className="text-2xl mb-8 text-white/90">Stay updated with the latest in overseas education</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#articles" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
              Read Our Blog
            </a>
          </div>
        </div>
      </section>

      <div id="articles" className="container mx-auto px-4 py-16">
        {blogs.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No articles published yet.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {blog.imageUrl && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#1a202c] mb-3 hover:text-[#08bcb4] transition-colors">
                    <Link href={`/blog/${blog.slug || blog.id}`}>
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="text-[#4a5568] mb-4">
                    {stripHtml(blog.content).substring(0, 150)}...
                  </p>
                  <div className="flex items-center justify-between text-sm text-[#718096]">
                    <span>By {blog.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
