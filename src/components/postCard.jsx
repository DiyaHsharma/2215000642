const PostCard = ({ post }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
      <div>
        <h3 className="text-xl font-semibold">{post.title}</h3>
        <p className="text-sm text-gray-600">{post.content}</p>
      </div>
      <div className="text-sm text-gray-500">Posted by: {post.username}</div>
    </div>
  );
};

export default PostCard;
