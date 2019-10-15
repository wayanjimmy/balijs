import React from 'react';
import styled from 'styled-components';

import { fontStyle } from '../configs';

const Headline3Styled = styled.h3`
  text-align: ${props => props.align || 'auto'};
  font-family: ${props => props.variant};
`;

/*
props = {
    align: 'auto' | 'left' | 'right' | 'center' | 'justify',
    variant: 'openSans' | 'playFair'
}
*/

function Headline3(props) {
  const { variant = 'openSans', style, ...otherProps } = props;
  return (
    <Headline3Styled variant={fontStyle[variant]} style={style} {...otherProps}>
      {props.children}
    </Headline3Styled>
  );
}

export default Headline3;
