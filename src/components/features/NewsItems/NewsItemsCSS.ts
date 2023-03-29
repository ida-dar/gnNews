import styled from 'styled-components';
import { theme } from 'src/assets/theme/theme';

interface ArticleProps {
  isDisplayedAsList: boolean;
}

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: (12px * 2);
  color: ${theme.colors.black};
  text-decoration: none;
  border: 1px solid lighten(${theme.colors.black}, 70%);
  padding: 24px;
  height: fit-content;
  min-height: ${(props: ArticleProps) => (props.isDisplayedAsList ? '150px' : '250px')};
  max-height: ${(props: ArticleProps) => (props.isDisplayedAsList ? '150px' : '500px')};
  background: ${theme.colors.bgColorDark};
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 40px 40px 0 rgba(0, 0, 0, 0.16);
    color: ${theme.colors.bgColorDark};
  }

  @media (max-width: 992px) {
    min-height: 250px;
  }
`;

export const Title = styled.h3`
  font-style: italic;
  font-weight: 600;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ImgContainer = styled.div`
  width: 100%;
  margin: 0 0 12px 0;
`;
