import { theme } from 'src/assets/theme/theme';
import styled, { keyframes } from 'styled-components';

const rotatation = keyframes`
  0% { transform: rotate(0deg) }
  25% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  75% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Animated = styled.span`
  position: absolute;
  left: 100%;
  top: 0;
  height: 100%;
  width: 100%;
  background: none repeat scroll 0 0 ${theme.colors.secondary};
  opacity: 0.8;
  animation: ${rotatation} 3s infinite;
  transform-origin: 0 50% 0;
`;

const Left = styled.span`
  ${Animated} {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

const Right = styled.span`
  ${Animated} {
    left: -100%;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    transform-origin: 100% 50% 0;
  }
`;

const Spinner = styled.span`
  position: relative;
  display: inline-block;
  height: 100px;
  width: 100px;
  margin: (12px * 12) auto;
  padding: 0;
  border-radius: 50%;
  background: none repeat scroll 0 0 #dddddd;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) inset, 0 0 25px rgba(0, 0, 255, 0.075);

  &:after {
    content: '';
    position: absolute;
    top: 9px;
    left: 9px;
    display: block;
    height: 82px;
    width: 82px;
    background: none repeat scroll 0 0 #f2f2f2;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }

  > span {
    position: absolute;
    height: 100%;
    width: 50%;
    overflow: hidden;
  }

  ${Left} {
    left: 0;
  }

  ${Right} {
    left: 50%;
  }
`;

const Loader = () => {
  return (
    <Container>
      <Spinner>
        <Left>
          <Animated />
        </Left>
        <Right>
          <Animated />
        </Right>
      </Spinner>
    </Container>
  );
};

export default Loader;
