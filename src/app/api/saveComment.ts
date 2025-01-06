import { sanityClient } from "@/sanity/sanityClient";

export const saveComment = async (comment: string, postId: string) => {
  try {
    const result = await sanityClient.create({
      _type: 'comment',
      comment: comment,
      postId: postId,
      createdAt: new Date().toISOString(),
    });
    console.log('Comment saved:', result);
    return result;
  } catch (error) {
    console.error('Error saving comment:', error);
    throw error;
  }
};
