import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 48px 0;
  margin: 0;
`;

export const Title = styled.h1`
  font-size: calc(15px + ((24 * (100vw - 720px)) / 720)); // magic number
  padding: 12px 0 48px 0;
`;
