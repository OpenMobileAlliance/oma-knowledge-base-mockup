import fs from 'fs';
import path from 'path';

export async function getArticleRoutes() {
    const articlesDir = path.resolve(process.cwd(), 'content/media/articles');
    if (!fs.existsSync(articlesDir)) return [];

    return fs
        .readdirSync(articlesDir)
        .filter(file => file.endsWith('.md'))
        .map(file => `/media/articles/${file.replace('.md', '')}`);
}
