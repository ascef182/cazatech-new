"use client";
import Link from "next/link";
import Image from "next/image";
import { FiCalendar, FiClock, FiTag } from "react-icons/fi";
import { motion } from "framer-motion";
import { type BlogPost } from "@/lib/blog-loader";

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.article
      key={post.slug}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
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
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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
              {post.tags.slice(0, 2).map((tag) => (
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
    </motion.article>
  );
}
