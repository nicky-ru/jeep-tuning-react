import remark from 'remark'
import html from 'remark-html'
import matter from "gray-matter";

export async function getServiceDescription(markdown) {
    const matterResult = matter(markdown);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return contentHtml;
}