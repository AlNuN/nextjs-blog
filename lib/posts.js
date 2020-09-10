import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const getDirectory = (folder) => path.join(process.cwd(), folder);

// eslint-disable-next-line import/prefer-default-export
export function getSortedPostsData(folder, length) {
  const directory = getDirectory(folder);
  // Get file names under /posts
  const fileNames = fs.readdirSync(directory).slice(0, length);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export function getAllPostIds(folder) {
  const directory = getDirectory(folder);
  const fileNames = fs.readdirSync(directory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

const markdownToHtml = async (content) => {
  const processedContent = await remark()
    .use(html)
    .process(content);
  return processedContent.toString();
};

export async function getPostData(id, directory) {
  const fullPath = path.join(directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const contentHtml = await markdownToHtml(matterResult.content);

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
