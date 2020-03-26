import styled from 'styled-components';

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 96px;
  width: 100vw;

  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledDescription = styled.div`
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    flex-basis: 350px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-left: 48px;
    margin-top: 0;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 46px;
  font-weight: 600;
  margin: 0 0 25px 0;
`;

export const StyledSubtitle = styled.p`
  margin-bottom: 48px;
  font-size: 24px;
  font-weight: 300;
`;

export const StyledImageContainer = styled.div`
  flex-grow: 1;

  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    padding-right: 20px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
`;
