import React from 'react';
import styled from 'styled-components';

const Headline3Styled = styled.h3`
  text-align: ${props => props.align || 'auto'};
`;

/*
props = {
    align: 'auto' | 'left' | 'right' | 'center' | 'justify',
}
*/

function Headline3(props) {
  const { style, ...otherProps } = props;
  return (
    <Headline3Styled style={style} {...otherProps}>
      {props.children}
    </Headline3Styled>
  );
}

export default Headline3;
