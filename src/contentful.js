import { createClient } from 'contentful';

// This sets up a connection to Contentful using environment variables
const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

// This function will fetch blog posts from your Contentful space
export async function getBlogPosts() {
  const response = await client.getEntries({
    // Make sure this matches your Contentful “Content Type ID” (likely "blogPost")
    content_type: 'blogPost',
    order: '-fields.publishDate' // optional, sorts your posts by publishDate desc
  });
  return response.items;
}
