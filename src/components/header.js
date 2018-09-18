import React from 'react';
import styled from 'styled-components';

const Hoi = styled.div`
  font-size: 100px;
`;
const Header = ({ siteTitle }) => {
  return <Hoi>{siteTitle}</Hoi>;
};

export default Header;
