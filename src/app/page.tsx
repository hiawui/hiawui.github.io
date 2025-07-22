import Link from 'next/link'
import RePostmanLogo from '@/components/RePostmanLogo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-6">
          Welcome to <span className="text-blue-600">Hiawui</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Developer & Technology Enthusiast
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Link
          href="/repostman"
          className="group block bg-white border-2 border-blue-200 rounded-xl p-8 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <RePostmanLogo 
                className="w-20 h-20" 
                width={80} 
                height={80}
                alt="RePostman Logo"
              />
            </div>
            <h2 className="text-3xl font-bold mb-3 text-blue-600">
              RePostman
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              A modern API testing and development tool built with React and TypeScript
            </p>
            <div className="flex justify-center items-center text-blue-600 font-semibold">
              <span>Explore RePostman</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </Link>
      </div>
    </main>
  )
} 