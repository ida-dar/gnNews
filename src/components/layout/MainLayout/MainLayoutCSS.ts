import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const Comp = styled(Container)`
  display: flex;
  padding: 0;
  overflow: hidden;
  height: calc(100vh - 45px - 12px - 48px); // reduced by height of the header, footer with paddings

  @media (max-width: 992px) {
    height: 100%;
  }
`;

export const Main = styled.main`
  flex: 3;
  display: flex;
  justify-content: center;
  padding: 24px 48px 0 48px;
  height: 100%;
  overflow-y: scroll;
`;
