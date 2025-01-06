export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
      name: 'comment',
      type: 'string',
      title: 'Comment',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'postId',
      type: 'string',
      title: 'Post ID',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};