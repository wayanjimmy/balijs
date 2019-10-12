import React from 'react';
import styled from 'styled-components';

const Headline2Styled = styled.h2`
  text-align: ${props => props.align || 'auto'};
`;

/*
props = {
    align: 'auto' | 'left' | 'right' | 'center' | 'justify',
}
*/

function Headline2(props) {
  const { style, ...otherProps } = props;
  return (
    <Headline2Styled style={style} {...otherProps}>
      {props.children}
    </Headline2Styled>
  );
}

export default Headline2;
