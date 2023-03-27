import styled from 'styled-components';
import { theme } from 'src/assets/theme/theme';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  padding: 24px;
  max-width: 275px;
  background-color: ${theme.colors.bgDarkColor};
  color: ${theme.colors.black};
  font-weight: 400;
  font-size: 1.15em;
  line-height: 1.25;
  height: 100%;
  overflow-y: scroll;
`;

export const CountriesBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.black};
`;

export const Nav = styled(NavLink)`
  &.active {
    ${CountriesBox} {
      color: ${theme.colors.primary};
    }
  }
`;
