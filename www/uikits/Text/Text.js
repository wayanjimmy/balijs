import * as React from 'react';
import styled from 'styled-components';
import { fontStyle, fontColors } from '../configs';

const StyledText = styled.span`
  font-family: ${props => props.variant};
  color: ${props => props.color};
`;

/*
props = {
    variant: 'openSans' | 'playFair'
    color: 'white', 'black', 'pencil',
}
*/

function Text(props) {
  const { children, variant = 'openSans', color = 'black', style, ...otherProps } = props;

  return (
    <StyledText
      variant={fontStyle[variant]}
      color={fontColors[color]}
      style={style}
      {...otherProps}
    >
      {children}
    </StyledText>
  );
}

export default Text;
