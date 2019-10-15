import * as React from 'react';
import styled from 'styled-components';
import { fontStyle } from '../configs';

const StyledText = styled.span`
  font-family: ${props => props.variant};
`;

/*
props = {
    variant: 'openSans' | 'playFair'
}
*/

function Text(props) {
  const { children, variant = 'openSans', style, ...otherProps } = props;
  return (
    <StyledText variant={variant} style={style} {...otherProps}>
      {children}
    </StyledText>
  );
}

export default Text;
