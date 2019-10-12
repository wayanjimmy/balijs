import React from 'react';
import styled from 'styled-components';

/*
props = {
  align: 'auto' | 'left' | 'right' | 'center' | 'justify',
}
*/

const ParagraphStyled = styled.p`
  text-align: ${props => props.align};
`;

function Paragraph(props) {
  const { style, ...otherProps } = props;
  return (
    <ParagraphStyled style={style} {...otherProps}>
      {props.children}
    </ParagraphStyled>
  );
}

export default Paragraph;
