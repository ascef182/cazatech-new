import { getBlogPost } from "@/lib/blog-loader-server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from "react-icons/fi";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug, 'en');
  
  if (!post) {
    return {
      title: "Article not found",
      description: "The article you are looking for was not found."
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "CazaTech"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug, 'en');

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="container py-16 max-w-4xl">
        {/* Navigation */}
        <Link
          href="/en/blog"
          className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground transition-colors"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <FiCalendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <FiClock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-muted rounded-full flex items-center gap-1"
              >
                <FiTag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/\n\n/g, '</p><p>')
                .replace(/\n/g, '<br>')
                .replace(/^/, '<p>')
                .replace(/$/, '</p>')
                .replace(/##\s(.+)/g, '<h2>$1</h2>')
                .replace(/###\s(.+)/g, '<h3>$1</h3>')
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.+?)\*/g, '<em>$1</em>')
                .replace(/`(.+?)`/g, '<code>$1</code>')
            }}
          />
        </div>

        {/* Author */}
        {post.author && (
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-muted-foreground">
                  Technology and innovation specialist
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Implement automation and development solutions that really drive results.
          </p>
          <Link
            href="https://wa.me/5511936205799?text=Hi! I saw the article about {post.category} and want to know more"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
          >
            Talk to Specialist
          </Link>
        </div>
      </article>
    </div>
  );
}
