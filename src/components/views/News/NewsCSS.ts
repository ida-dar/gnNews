import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

export const Header = styled.h2`
  font-size: calc(16px + ((36 * (100vw - 720px)) / 2040)); // magic number
  font-family: ${theme.font.fontHeader};
  font-weight: 100;
  line-height: 143.3%;
  letter-spacing: 0.05em;
  margin: 0 auto clamp(40px, 3.5vw, 70px);
  color: ${theme.colors.primary};
  text-transform: capitalize;
  text-align: center;
`;
