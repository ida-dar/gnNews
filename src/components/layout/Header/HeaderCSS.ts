import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

interface ButtonProps {
  isActive?: boolean;
  open?: boolean;
}

export const Component = styled.header`
  background: ${theme.colors.bgDarkColor};
  padding: 12px 0;
  text-align: center;
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
  margin: 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 2.25rem;
  margin: 12px;
`;

export const Btn = styled.button`
  color: ${theme.colors.black};
  position: relative;
  text-align: center;
  background-color: unset;
  border: none;
  cursor: pointer;
  color: ${(props: ButtonProps) => (props.isActive ? theme.colors.secondary : theme.colors.black)};
  transition: color 0.4s ease;
`;
