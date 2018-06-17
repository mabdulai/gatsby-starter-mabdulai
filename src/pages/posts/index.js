import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Posts = styled.div`
  display: flex;
  justify-content: center;
`;

const Post = styled.div`
  padding: 20px;
  margin: 0 20px;
  max-width: 350px;
  box-shadow: 0 2px 3px 1px rgba(50, 50, 93, 0.2);
  border-radius: 4px;
`;

const Excerpt = styled.p``;
const PostTitle = styled.h2`
  font-size: 20px;
`;

const PostsIndex = ({ posts = [] }) => {
  return (
    <Posts>
      {posts.map((post, index) => {
        return (
          <Post key={index}>
            <PostTitle>{post.node.frontmatter.title}</PostTitle>
            <Excerpt>{post.node.excerpt}</Excerpt>
            <Link to={post.node.frontmatter.path}>Read more...</Link>
          </Post>
        );
      })}
    </Posts>
  );
};

export default PostsIndex;
