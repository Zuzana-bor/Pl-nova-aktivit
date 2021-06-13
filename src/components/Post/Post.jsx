import React, { useState } from 'react';
import './post.css';

export const Post = ({ post }) => {
  const [expend, setExpend] = useState(false);

  return (
    <article className="onePost" key={post.title}>
      <figure className="imageTopicConteiner">
        <img className="imageTopic" src={post.image} alt={post.alt} />
      </figure>
      <div className="clanek">
        <h2>{post.title}</h2>
        <section aria-label="postLenght" onClick={() => setExpend(!expend)}>
          {expend ? post.content : post.content.slice(0, 150)}
        </section>
      </div>
    </article>
  );
};
