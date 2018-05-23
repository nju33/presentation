import styled from 'styled-components';

export const _Base = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  color: #abb2bf;
  letter-spacing: 1px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: -1;
  }
`;
