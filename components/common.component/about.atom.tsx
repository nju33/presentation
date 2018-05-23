import styled from 'styled-components';

// tslint:disable-next-line:variable-name
export const About = styled.ul`
  font-size: 21px;
  margin: 0;
  padding: 0;

  & li {
    margin: .75em 0;
  }

  & & {
    margin-left: 2.5em;
    list-style: circle;
  }
`;
