import { useState, useEffect } from "react";
import { getTrendingPosts } from "../services/api";
import PostCard from "../components/postCard";

const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    getTrendingPosts().then(setFeed);
  }, []);

  return (
    <div className="p-4 space-y-4">
      {feed.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
