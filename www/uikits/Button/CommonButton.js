import React from 'react';
import styled from 'styled-components';

import { colorPalette, fontColors } from '../configs';

const ButtonStyled = styled.button`
  padding: 10px 20px;
  border-radius: 50px;
  color: ${fontColors.white};
  background: rgb(244, 179, 0);
  background: linear-gradient(106deg, rgba(244, 179, 0, 1) 19%, rgba(216, 150, 2, 1) 69%);
  &:focus {
    outline: none;
  }
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.2);
  font-weight: bold;
`;

export default function CommonButton({ style, children, ...rest }) {
  return (
    <ButtonStyled style={style} {...rest}>
      {children}
    </ButtonStyled>
  );
}
