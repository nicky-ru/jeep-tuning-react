import fs from 'fs'
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
const confidentialityPath = './privacyPolicy/conf-policy.md'

export async function getPolicyData() {
    const fileContents = fs.readFileSync(confidentialityPath, 'utf8')

    // Use gray-matter to parse the privacyPolicy policy metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        contentHtml,
        ...matterResult.data
    }
}