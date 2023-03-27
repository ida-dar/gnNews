import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

interface ButtonProps {
  isActive?: boolean;
  open?: boolean;
}

export const Component = styled.header`
  background: ${theme.colors.black};
  padding: 12px 0;
  text-align: center;
  color: ${theme.colors.white};
  height: 60px;
`;

export const Logo = styled.p`
  font-family: ${theme.font.fontHeader};
  font-size: calc(16px + ((36 * (100vw - 720px)) / 2040)); // magic number
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  line-height: 1.25;
  letter-spacing: 0.25rem;
  font-style: italic;
  margin: 0;
  user-select: none;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 2.25rem;
  margin: 0 12px;
`;

export const Btn = styled.button`
  color: ${theme.colors.black};
  position: relative;
  text-align: center;
  background-color: unset;
  border: none;
  cursor: pointer;
  color: ${(props: ButtonProps) => (props.isActive ? theme.colors.primary : theme.colors.grey400)};
  transition: color 0.4s ease;
  margin: 0;
`;
