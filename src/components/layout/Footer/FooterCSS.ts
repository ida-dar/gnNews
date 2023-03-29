import styled from 'styled-components';
import { theme } from 'src/assets/theme/theme';

export const Div = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: space-between;
  text-align: center;
  background-color: ${theme.colors.bgDarkColor};
  padding: 6px 0;
  height: 45px;

  @media (max-width: 992px) {
    flex-direction: column;
    height: 75px;
  }
`;

export const Content = styled.p`
  font-size: 1.2rem;
  padding: 0 48px;
  margin: 12px;
  line-height: 125.8%;
  font-weight: 600;
  letter-spacing: 0.25em;

  @media (max-width: 992px) {
    margin: 6px;
  }
`;
