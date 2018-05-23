import styled from 'styled-components';

// tslint:disable-next-line:variable-name
export const Progress = styled.div`
  width: calc(100% * ${p => p['aria-valuenow']});
  transition: .1s;
  height: 2px;
  position: fixed;
  top: 0;
  left: 0;
  background: #54c1de;
`;
