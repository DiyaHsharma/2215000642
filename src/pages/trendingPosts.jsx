import { useState, useEffect } from "react";
import { getTrendingPosts } from "../services/api";
import PostCard from "../components/postCard";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getTrendingPosts().then(setPosts);
  }, []);

  return (
    <div className="p-4 space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default TrendingPosts;
