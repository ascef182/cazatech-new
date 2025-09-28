"use client";
import BlogArticle from "@/components/ui/blog-article";

type TemplateProps = {
  frontmatter?: Record<string, any>;
  contentHtml: string;
  backHref?: string;
  backLabel?: string;
};

export default function BlogTemplate({
  frontmatter,
  contentHtml,
  backHref,
  backLabel,
}: TemplateProps) {
  return (
    <BlogArticle
      title={frontmatter?.title ?? ""}
      category={frontmatter?.category}
      date={frontmatter?.date}
      readTime={frontmatter?.readTime}
      image={frontmatter?.image ? { src: frontmatter.image, alt: frontmatter?.title } : undefined}
      author={frontmatter?.author}
      html={contentHtml}
      backHref={backHref}
      backLabel={backLabel}
    />
  );
}




