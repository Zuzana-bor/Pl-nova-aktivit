import React, { useState } from 'react';
import './topic.css';
import { useParams } from 'react-router-dom';
import { MenuInspiration } from '../../components/MenuInspiration/MenuInspiration';
import { posts } from '../../data';
import { Search } from '../../components/Search/Search';

export const Topic = () => {
  const [filter, setFilter] = useState('');

  const { topic } = useParams();

  const relatetPosts = posts.filter(
    (post) =>
      post.category.toLowerCase() === topic && post.keys.includes(filter),
  );

  return (
    <>
      <MenuInspiration />
      <Search performSearch={(text) => setFilter(text)} />
      <div className="posts">
        {relatetPosts.map((post) => (
          <article className="onePost" key={post.title}>
            <figure className="imageTopicConteiner">
              <img className="imageTopic" src={post.image} alt={post.alt} />
            </figure>
            <div>
              <h2>{post.title}</h2>
              <section>{post.content.slice(0, 150)}...</section>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
