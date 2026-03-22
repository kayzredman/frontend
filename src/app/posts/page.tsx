"use client";

import { useEffect, useState } from "react";

interface Post {
  id: string;
  userId: string;
  content: string;
  status: string;
  scheduledAt?: string;
  publishedAt?: string;
  seriesId?: string;
  theme?: string;
  createdAt: string;
  updatedAt: string;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3002/posts");
      const data = await res.json();
      setPosts(data);
    } finally {
      setLoading(false);
    }
  }

  async function createPost(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3002/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "demo-user",
          content,
          status: "draft",
        }),
      });
      if (res.ok) {
        setContent("");
        fetchPosts();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>Posts</h1>
      <form onSubmit={createPost} style={{ marginBottom: 24 }}>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={3}
          style={{ width: 400 }}
          placeholder="Write a new post..."
        />
        <br />
        <button type="submit" disabled={loading || !content.trim()}>
          {loading ? "Creating..." : "Create Post"}
        </button>
      </form>
      <h2>All Posts</h2>
      {loading && <div>Loading...</div>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.content}</strong> <em>({post.status})</em>
            <div style={{ fontSize: 12, color: '#888' }}>Created: {post.createdAt}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
