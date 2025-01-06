import { sanityClient } from "./sanityClient";

export const fetchComments = async (postId: string): Promise<{ comment: string; createdAt: string }[]> => {
    const query = `
      *[_type == "comment" && postId == $postId] | order(createdAt asc) {
        comment,
        createdAt
      }
    `;
    return sanityClient.fetch(query, { postId });
  };
  