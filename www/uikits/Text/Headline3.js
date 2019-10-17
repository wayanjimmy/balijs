import React from 'react';
import styled from 'styled-components';

import { fontStyle, fontSize } from '../configs';

const Headline3Styled = styled.h3`
  text-align: ${props => props.align || 'auto'};
  font-family: ${props => props.variant};
  font-size: ${props => props.size};
  margin: 0;
  line-height: 1.25;
  white-space: normal;
  letter-spacing: 2px;
`;

/*
props = {
    align: 'auto' | 'left' | 'right' | 'center' | 'justify',
    variant: 'openSans' | 'playFair',
    size: 'small' | 'normal' | 'medium' | 'large' | 'extra-large' | 'display' | 'display-large'
*/

function Headline3(props) {
  const { variant = 'openSans', size = 'normal', margin, style, ...otherProps } = props;
  return (
    <Headline3Styled
      variant={fontStyle[variant]}
      size={fontSize[size]}
      style={style}
      {...otherProps}
    >
      {props.children}
    </Headline3Styled>
  );
}

export default Headline3;
