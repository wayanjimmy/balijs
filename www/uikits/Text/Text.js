import * as React from 'react';
import styled from 'styled-components';
import { fontStyle, fontColors, fontSize } from '../configs';

const StyledText = styled.span`
  font-family: ${props => props.variant};
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin: 0;
  line-height: 1.25;
  white-space: normal;
`;

/*
props = {
    variant: 'openSans' | 'playFair'
    color: 'white', 'black', 'pencil',
    size: 'small' | 'normal' | 'medium' | 'large' | 'extra-large' | 'display' | 'display-large'
    margin: string
}
*/

function Text(props) {
  const {
    children,
    variant = 'openSans',
    color = 'black',
    size = 'normal',
    style,
    ...otherProps
  } = props;

  return (
    <StyledText
      variant={fontStyle[variant]}
      color={fontColors[color]}
      size={fontSize[size]}
      style={style}
      {...otherProps}
    >
      {children}
    </StyledText>
  );
}

export default Text;
