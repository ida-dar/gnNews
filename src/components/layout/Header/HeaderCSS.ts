import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

export const Component = styled.header`
  background: ${theme.colors.bgDarkColor};
  padding: 12px 0;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

export const Logo = styled.p`
  font-family: ${theme.font.fontMain};
  font-size: ${theme.font.size.header};
  font-weight: 400;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  line-height: 1.25;
  letter-spacing: 0.25rem;
  font-style: italic;
`;
