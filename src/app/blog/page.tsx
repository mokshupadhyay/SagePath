// src/app/blog/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">EkLavya Blog</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Replace with actual blog post data */}
        {[1, 2, 3, 4].map((post) => (
          <div key={post} className="bg-white p-6 rounded-lg shadow-md">
            <Image src={`/placeholder-blog-${post}.jpg`} alt="Blog post thumbnail" width={400} height={250} className="mb-4 rounded" />
            <h2 className="text-2xl font-semibold mb-2">Blog Post Title {post}</h2>
            <p className="text-gray-600 mb-4">Posted on January {post}, 2024 by Author Name</p>
            <p className="mb-4">Brief excerpt or summary of the blog post content goes here, providing a preview of the full article.</p>
            <Link href={`/blog/${post}`} className="text-blue-600 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Load More Posts
        </button>
      </div>
    </div>
  )
}