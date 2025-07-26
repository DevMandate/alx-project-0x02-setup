import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";


type ApiPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const data: ApiPost[] = await res.json();

      const formattedPosts: PostProps[] = data.map((post) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formattedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </main>
    </div>
  );
};

export default Posts;
