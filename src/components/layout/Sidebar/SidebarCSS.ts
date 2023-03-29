import styled from 'styled-components';
import { theme } from 'src/assets/theme/theme';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from 'react-bootstrap';

interface SidebarProps {
  isMobileView: boolean;
}

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

  @media (max-width: 992px) {
    position: absolute;
    z-index: 100000;
    transform: ${(props: SidebarProps) => (props.isMobileView ? 'translateX(0)' : 'translateX(-100%)')};
  }
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

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.45em;
  text-align: center;
  cursor: pointer;
`;

export const Text = styled.p`
  text-transform: uppercase;
  font-style: italic;
  display: inline-block;
`;

export const Div = styled(Row)`
  justify-content: center;
  text-align: right;
  margin-bottom: 24px;
`;
