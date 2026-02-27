import Link from "next/link";
import Image from "next/image";
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from "react-icons/fi";
import { getAllBlogPosts, getBlogCategories, type BlogPost } from "@/lib/blog-loader-server";

export default async function BlogPage() {
  // Fetch data on the server
  const recentPosts = await getAllBlogPosts('en');
  const categories = await getBlogCategories();

  return (
    <div className="relative">
      {/* Hero moderno */}
      <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            CazaTech Blog
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Practical automation WhatsApp strategies, real cases and insights
            to multiply your results.
          </p>
        </div>
      </section>

      <div className="container relative -mt-8 md:-mt-12 pb-16">
        {/* Botão de Voltar */}
        <div className="mb-8">
          <Link
            href="/en"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border hover:bg-accent transition-all duration-200 shadow-sm"
            aria-label="Voltar para a página inicial"
          >
            <FiArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to home</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recent Articles</h2>
              <div className="flex gap-2">
                {categories.slice(0, 3).map((cat) => (
                  <span
                    key={cat.name}
                    className="px-3 py-1 text-xs bg-accent rounded-full"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {recentPosts.map((post: BlogPost, i: number) => (
                <article
                  key={post.slug}
                  className="group relative overflow-hidden rounded-xl border bg-card hover:shadow-lg transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-80 h-48 md:h-56 relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs font-medium bg-black/70 text-white rounded-md backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          <Link href={`/en/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <FiCalendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiClock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {post.tags.slice(0, 2).map((tag: string) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs bg-muted rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="flex items-center justify-between py-2 hover:bg-accent rounded-md px-2 transition-colors cursor-pointer"
                  >
                    <span className="text-sm">{cat.name}</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">
                      {cat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-xl border bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 p-6">
              <h3 className="font-bold mb-2">Ready to Automate?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Implement WhatsApp automation that really converts.
              </p>
              <Link
                href="https://wa.me/5511936205799?text=Hi! I saw the blog and want to automate my WhatsApp"
                target="_blank"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium"
              >
                Talk on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
