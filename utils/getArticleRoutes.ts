import fs from 'fs';
import path from 'path';

export async function getArticleRoutes() {
    const articlesDir = path.resolve(process.cwd(), 'content/60.media/6001.articles/');
    //console.log('Looking for articles in:', articlesDir);

    if (!fs.existsSync(articlesDir)) {
        //console.warn('Directory does not exist:', articlesDir);
        return [];
    }

    const files = fs.readdirSync(articlesDir);
    //console.log('Files found:', files);

    return files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            let name = file.toLowerCase().replace('.md', ''); // Convert to lowercase and remove .md
            name = name.replace(/^60\./, '').replace(/^6001\./, ''); // Remove the number prefixes
            return `/media/articles/${name}`;
        });
}

const articleRoutes = await getArticleRoutes();
//console.log('Article Routes:', ...articleRoutes.map(route => `'${route}'${','}`));