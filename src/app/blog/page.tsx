import { getAllBlogPosts, getBlogCategories, type BlogPost } from "@/lib/blog-loader-server";
import { BlogHero, BlogHeroContent } from "@/components/blog/BlogHero";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { BlogBackButton } from "@/components/blog/BlogBackButton";

export default async function BlogPage() {
  // Fetch data on the server
  const recentPosts = await getAllBlogPosts('pt');
  const categories = await getBlogCategories();

  return (
    <div className="relative">
      {/* Hero moderno */}
      <BlogHero>
        <BlogHeroContent />
      </BlogHero>

      <div className="container relative -mt-8 md:-mt-12 pb-16">
        {/* Botão de Voltar */}
        <BlogBackButton />

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Artigos Recentes</h2>
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
              {recentPosts.map((post, i) => (
                <BlogPostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <BlogSidebar categories={categories} />
        </div>
      </div>
    </div>
  );
}
