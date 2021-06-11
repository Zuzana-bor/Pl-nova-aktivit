import React from 'react';
import './topic.css';
import { useParams } from 'react-router-dom';
import { MenuInspiration } from '../../components/MenuInspiration/MenuInspiration';
import { posts } from '../../data';
import { Search } from '../../components/Search/Search';

export const Topic = () => {
  const [listOfTopic, setListOfTopic] = useState([]);
  
const handleClick = (event) => {
     const result = posts.filter((post) => post.keys.includes(event.target.value));
    setListOfTopic(result);
};
  
  let { topic } = useParams();

  const relatetPosts = posts.filter(
    (post) => post.category.toLowerCase() === topic,
  );

  

  return (
    <>
      <MenuInspiration />
      <Search key="query" searching={handleClick}  />
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
