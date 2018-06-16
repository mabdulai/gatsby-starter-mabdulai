import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: #3700ff;
  padding: 50px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <StyledLink to="/">{siteTitle}</StyledLink>
  </HeaderContainer>
);

export default Header;
