import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        
        {/* Back Button */}
        <div className="absolute top-8 left-8 z-20">
          <Link
            href="/blog"
            className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/30 inline-flex items-center gap-2"
          >
            <span>←</span>
            <span>Takaisin blogiin</span>
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-white px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#f59e0b' }}>
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/90 text-sm">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="blog-content">
          <MDXRemote 
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
        </div>
      </article>

      {/* Related Articles CTA */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Haluatko lukea lisää?
          </h2>
          <p className="mb-8 text-white/90">
            Tutustu lisää artikkeleihin blockchain-kiinteistöistä ja markkinoiden näkemyksistä
          </p>
          <Link
            href="/blog"
            className="inline-block text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
            style={{ backgroundColor: '#f59e0b' }}
          >
            Näytä kaikki artikkelit
          </Link>
        </div>
      </section>
    </div>
  );
}
