'use client';

import { posts } from '@/data/posts';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import CommentForm from '@/components/CommentForm';
import { fetchComments } from '@/sanity/sanity';
import { use } from 'react';

interface IBlog {
  params: Promise<{
    id: string;
  }>;
}

interface Comment {
  comment: string;
  createdAt: string;
}

const BlogDetail: React.FC<IBlog> = ({ params }) => {

  const { id } = use(params);


  const blog = posts.find((p) => p.id === id);

  if (!blog) return notFound();

  const [comments, setComments] = useState<Comment[]>([]);

  const loadComments = async () => {
    const data = await fetchComments(id);
    setComments(data);
  };

  useEffect(() => {
    loadComments();
  }, [id]);


  return (
    <section className="min-h-screen max-w-screen-2xl w-[80%] flex flex-col justify-center items-center">
      <div className="flex items-center justify-center">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="responsive"
          width={50}
          height={50}
          objectFit="cover"
          className="!h-[50%] !w-[100%] rounded-lg shadow-2xl"
        />
      </div>

      <div className="mt-10">
        <h2 className="text-5xl tracking-wide">{blog.title}</h2>
        <p className="text-[#6D6E76] text-base text-left mt-8">{blog.detailedDescription}</p>
        <h3 className="text-4xl tracking-wide mt-8">{blog.title}</h3>
        <p className="text-[#6D6E76] text-base text-left mt-8">{blog.shortDescription}</p>
      </div>

      {/* Comment Form */}
      <CommentForm postId={id} onCommentSaved={loadComments} />

      {/* Comments Section */}
      <div className="mt-10 w-full">
        <h3 className="text-2xl font-bold mb-4">Comments</h3>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <p>{comment.comment}</p>
              <small className="text-gray-500">{new Date(comment.createdAt).toLocaleString()}</small>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </section>
  );
};

export default BlogDetail;