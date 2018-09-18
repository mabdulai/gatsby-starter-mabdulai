import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  min-width: 100vw;
  background: #000;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 48px;
  padding: 0 100px;
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
  return (
    <Layout>
      <Container>
        <Hero>
          <Title>Welcome to your new Gatsby site.</Title>
          <SubTitle>Now go build something great.</SubTitle>
          <a
            target="_blank"
            href="https://github.com/mabdulai/mabdulai-gatsby-starter"
          >
            <HeroButton>Check out the Github </HeroButton>
          </a>
        </Hero>
      </Container>
    </Layout>
  );
};

export default IndexPage;
