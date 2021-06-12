import React, { useState } from 'react';
import './topic.css';
import { useParams } from 'react-router-dom';
import { MenuInspiration } from '../../components/MenuInspiration/MenuInspiration';
import { posts } from '../../data';
import { Search } from '../../components/Search/Search';

export const Topic = () => {
  const [filter, setFilter] = useState('');
  const [postLenght, setPostLenght] = useState([]);

  const { topic } = useParams();

  const relatedPosts = posts.filter(
    (post) =>
      post.category.toLowerCase() === topic && post.keys.includes(filter),
  );

  const handlePostClick = (event) => {
    console.log('jedu');
    setPostLenght(event.target.post.content); 
  };

  return (
    <>
      <MenuInspiration />
      <Search performSearch={(text) => setFilter(text)} />
      <div className="posts">
        {relatedPosts.map((post) => (
          <article className="onePost" key={post.title}>
            <figure className="imageTopicConteiner">
              <img className="imageTopic" src={post.image} alt={post.alt} />
            </figure>
            <div>
              <h2>{post.title}</h2>
              <section onClick={handlePostClick} value={postLenght}>
                {post.content.slice(0, 150)}...
              </section>
              ))
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
