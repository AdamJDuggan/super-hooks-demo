import React, { useState } from "react";
import { useScrollToBottom } from "super-hooks";
import Hook from "../components/Hook";
import { getHook } from "../hooksData";

const code = `
  import { useScrollToBottom } from "super-hooks";

  const { scrollContainer } = useScrollToBottom(posts);
  
  return (
      <div  ref={scrollContainer}>
      {posts.map(post => <li>{post}</li>)}
      </div>
    )
  `;
const hook = getHook("useScrollToBottom()");

export default function ScrollToBottom() {
  const [posts, setPosts] = useState(
    Array.from({ length: 30 }, (_, i) => ` Post ${i + 1}`)
  );
  const [post, setPost] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setPosts((posts) => [...posts, post]);
    setPost("");
  };

  const { scrollContainer } = useScrollToBottom(posts);

  return (
    <Hook {...hook} code={code}>
      <div
        className="rounded border border-gray-800 p-2 h-24 overflow-auto mb-2"
        ref={scrollContainer}
      >
        {posts.map((post, index) => (
          <p key={index}>{post}</p>
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <input
          value={post}
          onChange={(e) => setPost(e.target.value)}
          className="py-2 px-3 rounded border border-gray-800 mb-2"
        />
        <button className="p-1 rounded font-bold bg-blue-600 text-white block">
          Add Post
        </button>
      </form>
    </Hook>
  );
}
