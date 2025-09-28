"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from "react-icons/fi";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";

type Author = {
  name: string;
  role?: string;
  avatar?: string;
};

type BlogArticleProps = {
  title: string;
  category?: string;
  date?: string;
  readTime?: string;
  image?: {
    src: string;
    alt?: string;
  };
  author?: Author;
  html?: string;
  children?: React.ReactNode;
};

export default function BlogArticle(props: BlogArticleProps) {
  const { title, category, date, readTime, image, author, html, children } =
    props;

  return (
    <TracingBeam className="px-6">
      <div className="container py-10 md:py-14 relative max-w-4xl">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-card border hover:bg-accent transition-all duration-200 shadow-sm text-sm"
            aria-label="Voltar para o blog"
          >
            <FiArrowLeft className="h-4 w-4" />
            <span>Voltar</span>
          </Link>
        </div>

        <header className="mb-6">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            {category ? (
              <span className="inline-flex items-center gap-1">
                <FiTag className="h-4 w-4" />
                {category}
              </span>
            ) : null}
            {date ? (
              <span className="inline-flex items-center gap-1">
                <FiCalendar className="h-4 w-4" />
                {date}
              </span>
            ) : null}
            {readTime ? (
              <span className="inline-flex items-center gap-1">
                <FiClock className="h-4 w-4" />
                {readTime}
              </span>
            ) : null}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            {title}
          </h1>
        </header>

        {image ? (
          <div className="relative h-56 md:h-80 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        ) : null}

        {html ? (
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <div className="blog-prose">{children}</div>
        )}

        {author ? (
          <div className="mt-10 pt-6 border-t border-border">
            <div className="flex items-center gap-4">
              {author.avatar ? (
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              ) : null}
              <div>
                <h3 className="font-semibold text-sm">{author.name}</h3>
                {author.role ? (
                  <p className="text-xs text-muted-foreground">{author.role}</p>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </TracingBeam>
  );
}








