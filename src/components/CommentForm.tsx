
import { saveComment } from '@/sanity/sanityClient';
import React, { useState } from 'react';

interface CommentFormProps {
  postId: string;
  onCommentSaved: () => void; // Callback to reload comments after saving
}

const CommentForm: React.FC<CommentFormProps> = ({ postId, onCommentSaved }) => {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setIsSubmitting(true);
      try {
        await saveComment(comment, postId); // Save the comment to Sanity
        setComment(''); // Clear the input field
        onCommentSaved(); // Trigger the callback to refresh comments
      } catch (error) {
        console.error('Error saving comment:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-24 w-full">
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your comment..."
        
        className="w-full px-4 border-b outline-none"
        disabled={isSubmitting}
      />
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Post Comment'}
      </button>
    </form>
  );
};

export default CommentForm;