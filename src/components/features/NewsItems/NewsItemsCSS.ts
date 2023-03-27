import styled from 'styled-components';
import { theme } from 'src/assets/theme/theme';

interface ArticleProps {
  isDisplayedAsList: boolean;
}

export const Article = styled.article`
  display: block;
  margin-top: (12px * 2);
  color: ${theme.colors.black};
  text-decoration: none;
  border: 1px solid lighten(${theme.colors.black}, 70%);
  padding: 24px;
  height: ${(props: ArticleProps) => (props.isDisplayedAsList ? '150px' : '275px')};
  background: ${theme.colors.bgColorDark};
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 40px 40px 0 rgba(0, 0, 0, 0.16);
    color: ${theme.colors.bgColorDark};
  }
`;

export const Title = styled.h3`
  font-style: italic;
  font-weight: 600;
`;
