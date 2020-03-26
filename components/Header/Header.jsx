import React from 'react';

import { StyledContainer, StyledLogo, StyledNavigation, StyledNavigationLink } from './Header.style';

const Header = () => (
  <StyledContainer>
    <StyledLogo>OldenSoftware</StyledLogo>
    <StyledNavigation>
      <StyledNavigationLink href="https://www.bartek-jozwowiak.me/blog">Blog</StyledNavigationLink>
      <StyledNavigationLink href="#contact">Contact</StyledNavigationLink>
    </StyledNavigation>
  </StyledContainer>
);

export { Header };
