import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js and React.',
    date: '2024-01-15',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the web development landscape.',
    date: '2024-01-10',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Building Scalable Applications',
    excerpt: 'Best practices for designing and building applications that can grow with your business.',
    date: '2024-01-05',
    readTime: '12 min read'
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-8">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <time dateTime={post.date}>{post.date}</time>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-semibold mb-3">
                <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              
              <Link 
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 