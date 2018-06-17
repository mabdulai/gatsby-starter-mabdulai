import React from 'react';
import styled from 'styled-components';

import Posts from '../pages/posts';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  background: #000;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 48px;
`;

const SubTitle = styled.h2`
  padding-bottom: 30px;
`;

const HeroButton = styled.button`
  padding: 16px 24px;
  background: #fff;
  border-radius: 3px;
  border: none;
  font-weight: 700;
  color: #000;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Hero>
        <Title>Welcome to your new Gatsby site.</Title>
        <SubTitle>Now go build something great.</SubTitle>
        <a target="_blank" href="https://github.com/mabdulai/mabdulai-gatsby-starter">
          <HeroButton>Check out the Github </HeroButton>
        </a>
      </Hero>
      <Posts posts={data.allMarkdownRemark.edges} />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            path
          }
        }
      }
    }
  }
`;
