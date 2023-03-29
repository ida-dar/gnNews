import { theme } from 'src/assets/theme/theme';
import styled from 'styled-components';

interface ButtonProps {
  isActive: boolean;
}

export const Header = styled.h2`
  font-size: calc(16px + ((36 * (100vw - 320px)) / 2040)); // magic number
  font-family: ${theme.font.fontHeader};
  font-weight: 100;
  line-height: 143.3%;
  letter-spacing: 0.05em;
  margin: 0 auto clamp(40px, 3.5vw, 70px);
  color: ${theme.colors.primary};
  text-transform: capitalize;
  text-align: center;
`;

export const Pages = styled.ul`
  list-style: none;
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const Numbers = styled.li`
  position: relative;
  display: inline-block;
  padding: 6px;
`;

export const Btn = styled.button`
  font-size: 1.1rem;
  display: inline-block;
  margin: 4px;
  padding: 0;
  height: 25px;
  width: 25px;
  border: none;
  border-radius: 0;
  background-color: ${theme.colors.primary};
  background-image: ${(props: ButtonProps) =>
    props.isActive
      ? `linear-gradient(217deg, ${theme.colors.white}, ${theme.colors.grey300}, ${theme.colors.primary}),
      linear-gradient(127deg, ${theme.colors.primary}, ${theme.colors.grey300}, ${theme.colors.white}),
      linear-gradient(336deg, ${theme.colors.white}, ${theme.colors.primary}, ${theme.colors.grey300})`
      : 'none'};
  color: ${theme.colors.black};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: inherit;
    background-image: linear-gradient(217deg, ${theme.colors.white}, ${theme.colors.grey300}, ${theme.colors.primary}),
      linear-gradient(127deg, ${theme.colors.primary}, ${theme.colors.grey300}, ${theme.colors.white}),
      linear-gradient(336deg, ${theme.colors.white}, ${theme.colors.primary}, ${theme.colors.grey300});
  }
`;
