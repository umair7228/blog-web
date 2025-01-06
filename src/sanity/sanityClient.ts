import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});


// Save a new comment to the Sanity database
export const saveComment = async (comment: string, postId: string) => {
  try {
    const result = await sanityClient.create({
      _type: 'comment', // Reference the comment schema in your Sanity setup
      comment: comment,
      postId: postId,    // Reference the post this comment is for
      createdAt: new Date().toISOString(),
    });
    console.log('Comment saved:', result);
  } catch (error) {
    console.error('Error saving comment:', error);
    throw error;
  }
};