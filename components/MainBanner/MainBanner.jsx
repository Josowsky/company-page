import React from 'react';

import {
  StyledContainer,
  StyledDescription,
  StyledTitle,
  StyledSubtitle,
  StyledImageContainer,
  StyledImage,
} from './MainBanner.style';

const MainBanner = () => (
  <StyledContainer>
    <StyledDescription>
      <StyledTitle>We create world-changing software.</StyledTitle>
      <StyledSubtitle>Contact us and take your business to the next level.</StyledSubtitle>
    </StyledDescription>
    <StyledImageContainer>
      <StyledImage src="/banner.png" alt="Main banner image" />
    </StyledImageContainer>
  </StyledContainer>
);

export { MainBanner };
