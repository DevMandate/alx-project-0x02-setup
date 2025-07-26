import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

// API response type
type ApiPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface PostsPageProps {
  posts: PostProps[];
}

const Posts = ({ posts }: PostsPageProps) => {
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

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const data: ApiPost[] = await res.json();

  const posts: PostProps[] = data.map((post) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
