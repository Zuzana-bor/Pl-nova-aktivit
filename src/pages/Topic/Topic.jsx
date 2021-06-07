import React from 'react';
import './topic.css';
import { useParams } from 'react-router-dom';
import { MenuInspiration } from '../../components/MenuInspiration/MenuInspiration';
import { posts } from '../../data';

export const Topic = () => {
  let { topic } = useParams();

  const relatetPosts = posts.filter(
    (post) => post.category.toLowerCase() === topic,
  );
  return (
    <>
      <MenuInspiration />
      <div className="posts">
        {relatetPosts.map((post) => (
          <article className="onePost">
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
