'use client';

import { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
};

const LoadingSpinner = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <p>Loading...</p>
      <div className="spinner"></div>
    </div>
  );
};

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div style={{ color: 'red', textAlign: 'center' }}>
      <h3>Error:</h3>
      <p>{message}</p>
    </div>
  );
};

export default function FetchPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/external');
        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'An error occurred';
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) return <ErrorMessage message={error} />;
  if (isLoading) return <LoadingSpinner />;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: '20px' }}>
              <h2 style={{ color: '#333' }}>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
