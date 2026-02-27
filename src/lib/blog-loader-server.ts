import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  published: boolean;
  author?: string;
  locale?: string;
}

const contentDirectory = path.join(process.cwd(), 'content', 'blog');

export async function getAllBlogPosts(locale: string = 'pt'): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(contentDirectory)) {
      console.warn('Blog content directory not found:', contentDirectory);
      return [];
    }

    const fileNames = fs.readdirSync(contentDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        const readTime = calculateReadTime(matterResult.content);
        
        return {
          slug,
          title: matterResult.data.title || slug,
          excerpt: matterResult.data.excerpt || createExcerpt(matterResult.content),
          content: matterResult.content,
          category: matterResult.data.category || 'Geral',
          date: matterResult.data.date || new Date().toLocaleDateString('pt-BR'),
          readTime,
          image: matterResult.data.image || getDefaultImage(matterResult.data.category),
          tags: matterResult.data.tags || [],
          published: matterResult.data.published !== false,
          author: matterResult.data.author,
          locale: matterResult.data.locale || locale
        } as BlogPost;
      })
      .filter(post => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return allPostsData;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string, locale: string = 'pt'): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const readTime = calculateReadTime(matterResult.content);

    return {
      slug,
      title: matterResult.data.title || slug,
      excerpt: matterResult.data.excerpt || createExcerpt(matterResult.content),
      content: matterResult.content,
      category: matterResult.data.category || 'Geral',
      date: matterResult.data.date || new Date().toLocaleDateString('pt-BR'),
      readTime,
      image: matterResult.data.image || getDefaultImage(matterResult.data.category),
      tags: matterResult.data.tags || [],
      published: matterResult.data.published !== false,
      author: matterResult.data.author,
      locale: matterResult.data.locale || locale
    } as BlogPost;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

export async function getBlogCategories(): Promise<{ name: string; count: number }[]> {
  const posts = await getAllBlogPosts();
  const categoryCount: Record<string, number> = {};
  
  posts.forEach((post: BlogPost) => {
    categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
  });
  
  return Object.entries(categoryCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);
  return `${readTime} min`;
}

function createExcerpt(content: string, maxLength: number = 160): string {
  const cleanContent = content.replace(/[#*`_~\[\]()]/g, '').replace(/\n+/g, ' ');
  const excerpt = cleanContent.substring(0, maxLength);
  return excerpt.length < cleanContent.length ? `${excerpt}...` : excerpt;
}

function getDefaultImage(category: string): string {
  const categoryImages: Record<string, string> = {
    'Automação': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop',
    'Desenvolvimento': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    'SaaS': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    'Marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    'SEO': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    'Cases': 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop'
  };
  
  return categoryImages[category] || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop';
}
