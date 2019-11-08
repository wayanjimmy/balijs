import React from 'react';
import styled from 'styled-components';
import { fontStyle, fontColors, fontSize } from '../configs';

/*
props = {
  align: 'auto' | 'left' | 'right' | 'center' | 'justify',
  variant: 'openSans' | 'playFair'
  color: 'white', 'black', 'pencil',
  size: 'small' | 'normal' | 'medium' | 'large' | 'extra-large' | 'display' | 'display-large'
}
*/

const ParagraphStyled = styled.p`
  text-align: ${props => props.align};
  font-family: ${props => props.variant};
  color: ${props => props.color};
  font-size: ${props => props.size};
`;

function Paragraph(props) {
  const { style, variant = 'openSans', color = 'black', size = 'normal', ...otherProps } = props;
  return (
    <ParagraphStyled
      style={style}
      variant={fontStyle[variant]}
      color={fontColors[color]}
      size={fontSize[size]}
      {...otherProps}
    >
      {props.children}
    </ParagraphStyled>
  );
}

export default Paragraph;
