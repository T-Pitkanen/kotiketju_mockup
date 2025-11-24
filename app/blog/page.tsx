import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getFeaturedPosts } from "@/lib/mdx";

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const featuredPosts = await getFeaturedPosts();
  const regularPosts = allPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Kiinteistötietoa & Uutisia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Tutustu uusimpiin trendeihin, näkemyksiin ja innovaatioihin blockchain-pohjaisessa kiinteistöliiketoiminnassa
            </p>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a1a1a' }}>Suositellut artikkelit</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover-lift"
                >
                  <div className="relative h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 text-sm font-semibold text-white rounded-full" style={{ backgroundColor: '#284b63' }}>
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                      {post.title}
                    </h3>
                    <p className="mb-4" style={{ color: '#2a2a2a' }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a1a1a' }}>Uusimmat artikkelit</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full" style={{ backgroundColor: '#f59e0b', color: '#f5f5f5' }}>
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                    {post.title}
                  </h3>
                  <p className="mb-4" style={{ color: '#2a2a2a' }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
