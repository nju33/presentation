import styled from 'styled-components';

// tslint:disable-next-line:variable-name
export const Accent = styled.em`
  font-style: normal;
  color: #54c1de;
  border-bottom: 1px solid;

  &[data-lang=html] {
    color: #e44d27;
    border: none;
  }

  &[data-lang=js] {
    color: #f0db50;
    border: none;
  }
`;
