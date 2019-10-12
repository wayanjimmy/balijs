import React from 'react';
import styled from 'styled-components';

import { colorPalette, fontColors } from '../configs';

const ButtonStyled = styled.button`
  padding: 10px 20px;
  border-radius: 50px;
  color: ${fontColors.white};
  background-color: ${colorPalette.yellow};
  &:focus {
    outline: none;
  }
`;

export default function CommonButton({ style, children, ...rest }) {
  return (
    <ButtonStyled style={style} {...rest}>
      {children}
    </ButtonStyled>
  );
}
