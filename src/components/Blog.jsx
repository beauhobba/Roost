import React, { useState, useEffect } from "react";
import coverphoto from "../images/coverphoto.png";
import { API } from 'aws-amplify';
import { listTodos } from '../graphql/queries';
import BlogCard from './blog_cards/BlogCard';



function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const postData = await API.graphql({ query: listTodos });
      console.log("yo");
      console.log(postData.data.listTodos.items);
      console.log("yo");
      setPosts(postData.data.listTodos.items);
    } catch (error) {
      console.log('Error fetching posts', error);
    }
  }

  return (
    <div className="blog"  style={{paddingBottom: 100}}>
      <div class="container">
        
        <h1 class="font-weight-light"  style={{justifyContent: 'center', alignItems: 'center', display: 'flex',}}><b>Blog</b></h1>
        <p   style={{justifyContent: 'center', alignItems: 'center', display: 'flex',}}>
          The home of all Roost related updates.
        </p>
            <div class="row justify-items-center my-2" style={{paddingLeft: 20, justifyContent: 'center',}}>
          {posts.reverse().map((post) => (
            <BlogCard key={post.id} date={post.createdAt} name={post.name} description={post.description}></BlogCard>
          ))}
          </div>
          </div>
        </div>


  );
}

export default Blog;
