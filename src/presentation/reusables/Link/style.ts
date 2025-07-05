import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BaseStyles = `
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #5b36f2;
  text-decoration: underline;

  display: inline;
  align-items: center;
  gap: 4px;

  &:active {
    color: #4318cd;
  }

  &:focus-visible {
    color: #4318cd;
    outline: 1px solid #4318cd;
    border-radius: 4px;
  }

  &:hover {
    color: #745ef6;
    font-weight: 700;
  }
`;

const CustomAnchor = styled.a.attrs({
  target: '_blank',
  rel: 'noreferrer',
  'data-testid': 'cmp-link'
})`
  ${BaseStyles}
`;

const CustomLink = styled(Link).attrs(() => ({
  'data-testid': 'cmp-link'
}) as any)`
  ${BaseStyles}
`;

export { CustomAnchor, CustomLink };
