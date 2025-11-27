import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Caminhos base para os conteúdos markdown
export const CONTENT_PATHS = {
  blog: "content/blog",
  legal: "content/legal",
} as const;

export type ContentType = keyof typeof CONTENT_PATHS;
export type MarkdownFrontmatter = Record<string, unknown>;

export interface MarkdownData {
  frontmatter: MarkdownFrontmatter;
  contentHtml: string;
}

/**
 * Lê e processa um arquivo markdown de uma pasta de conteúdo específica
 */
export async function getMarkdownData(
  filename: string,
  contentType?: ContentType
): Promise<MarkdownData> {
  const basePath = contentType ? CONTENT_PATHS[contentType] : "";
  const fullPath = path.join(process.cwd(), basePath, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return { frontmatter: data, contentHtml };
}

/**
 * Lê um arquivo markdown do blog
 */
export async function getBlogPost(slug: string): Promise<MarkdownData> {
  return getMarkdownData(`${slug}.md`, "blog");
}

/**
 * Lê um documento legal
 */
export async function getLegalDocument(slug: string): Promise<MarkdownData> {
  return getMarkdownData(`${slug}.md`, "legal");
}

/**
 * Lê o conteúdo bruto de um arquivo markdown
 */
export function readMarkdownFile(
  filename: string,
  contentType?: ContentType
): string {
  const basePath = contentType ? CONTENT_PATHS[contentType] : "";
  const fullPath = path.join(process.cwd(), basePath, filename);
  return fs.readFileSync(fullPath, "utf8");
}

/**
 * Processa conteúdo markdown para HTML
 */
export async function processMarkdown(
  markdownContent: string
): Promise<string> {
  const processed = await remark().use(html).process(markdownContent);
  return processed.toString();
}

/**
 * Lista todos os arquivos de um tipo de conteúdo
 */
export function listContentFiles(contentType: ContentType): string[] {
  const dirPath = path.join(process.cwd(), CONTENT_PATHS[contentType]);
  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}
