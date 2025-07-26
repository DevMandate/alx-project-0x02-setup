import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-2">{content}</p>
      <p className="text-sm text-gray-600">Posted by User {userId}</p>
    </div>
  );
};

export default PostCard;
