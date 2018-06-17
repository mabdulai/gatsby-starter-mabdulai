import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Posts = styled.div`
  display: flex;
`;

const Post = styled.div`
  padding: 20px;
`;

const PostsIndex = ({ posts = [] }) => {
  return (
    <Posts>
      {posts.map((post, index) => {
        return (
          <Post key={index}>
            <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
          </Post>
        );
      })}
    </Posts>
  );
};

export default PostsIndex;
