import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type MarkdownFrontmatter = Record<string, any>;

export async function getMarkdownData(filename: string): Promise<{
  frontmatter: MarkdownFrontmatter;
  contentHtml: string;
}> {
  const fullPath = path.join(process.cwd(), filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return { frontmatter: data, contentHtml };
}

export function readMarkdownFile(filename: string): string {
  const fullPath = path.join(process.cwd(), filename);
  return fs.readFileSync(fullPath, "utf8");
}

export async function processMarkdown(
  markdownContent: string
): Promise<string> {
  const processed = await remark().use(html).process(markdownContent);
  return processed.toString();
}
