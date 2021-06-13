import React, { useState } from 'react';
import './topic.css';
import { useParams } from 'react-router-dom';
import { MenuInspiration } from '../../components/MenuInspiration/MenuInspiration';
import { posts } from '../../data';
import { Search } from '../../components/Search/Search';
import { Post } from '../../components/Post/Post';

export const Topic = () => {
  const [filter, setFilter] = useState('');

  const { topic } = useParams();

  const relatedPosts = posts.filter(
    (post) =>
      post.category.toLowerCase() === topic && post.keys.includes(filter),
  );

  return (
    <>
      <MenuInspiration />
      <Search performSearch={(text) => setFilter(text)} />
      <div className="posts">
        {relatedPosts.map((post) => (
          <Post key={post.title} post={post} />
        ))}
      </div>
    </>
  );
};
