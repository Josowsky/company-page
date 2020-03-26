import styled from 'styled-components';

export const StyledContainer = styled.header`
  height: 60px;
  width: 100%;
  padding: 40px 48px;

  @media (min-width: 500px) {
    display: flex;
    align-items: center;
  }
`;

export const StyledLogo = styled.p`
  margin-right: auto;
  font-size: 46px;
`;

export const StyledNavigation = styled.div`
  display: flex;
`;

export const StyledNavigationLink = styled.a`
  display: block;
  font-size: 24px;
  margin-left: 45px;
`;
