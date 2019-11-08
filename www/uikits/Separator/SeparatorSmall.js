import React from 'react';
import styled from 'styled-components';
import { colorPalette } from '../configs';

const SeparatorSmallStyled = styled.div`
  width: 50px;
  height: 5px;
  margin: 10px auto;
  border-radius: 50px;
  background-color: ${colorPalette.yellow};
`;

function SeparatorSmall(props) {
  return <SeparatorSmallStyled />;
}

export default SeparatorSmall;
