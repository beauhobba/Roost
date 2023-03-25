import React, { useState, useEffect } from "react";
import coverphoto from "../images/coverphoto.png";
import { API } from 'aws-amplify';
import { getPosts } from '../graphql/queries';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const postData = await API.graphql({ query: getPosts });
      console.log("yo");
      console.log(postData.data.getPosts.items);
      console.log("yo");
      setPosts(postData.data.getPosts.items);
    } catch (error) {
      console.log('Error fetching posts', error);
    }
  }

  return (
    <div className="blog">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={coverphoto}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light"><b>Blog</b></h1>
        <ul>
          <p>
            <i>This feature is coming soon</i>
          </p>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
