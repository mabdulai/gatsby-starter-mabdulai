import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/layout';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
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

const MikaImg = styled(Img)`
  display: flex;
  flex: 1;
`;

const ImgContainer = styled.div`
  display: flex;
  height: 1000px;
  min-width: 1000px;
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
            rel="noopener noreferrer"
          >
            <HeroButton>Check out the Github </HeroButton>
          </a>
        </Hero>
      </Container>
      <ImgContainer>
        <MikaImg fluid={data.imageOne.childImageSharp.fluid} />1
        <MikaImg fluid={data.imageTwo.childImageSharp.fluid} />2
        <MikaImg fluid={data.imageThree.childImageSharp.fluid} />3
      </ImgContainer>
    </Layout>
  );
};

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "1.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "2.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "3.jpg" }) {
      ...fluidImage
    }
  }
`;
