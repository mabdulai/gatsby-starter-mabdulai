import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 50px;
  max-width: 1000px;
`;

const Hr = styled.hr`
  padding: 1px;
  background: #000;
  border-radius: 10px;
`;

export default function Template({ data }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data

  return (
    <Container className="blog-post-container">
      <Helmet title={post.frontmatter.title} />
      <Link to="/">Home</Link>
      <Hr />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Container>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
