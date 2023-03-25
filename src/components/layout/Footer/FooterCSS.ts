import styled from 'styled-components';
import { theme } from 'src/assets/theme/theme';

export const Div = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: space-between;
  text-align: center;
  background-color: ${theme.colors.bgDarkColor};
  margin: 24px 0 0 0;
  padding: 24px;
`;

export const Content = styled.p`
  padding: 0 48px;
  margin: 12px;
`;
