import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

export function processMarkdown(content: string): string {
  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  return marked(content) as string;
}

export function readMarkdownFile(filename: string): string {
  const filePath = path.join(process.cwd(), filename);
  return fs.readFileSync(filePath, 'utf-8');
}
