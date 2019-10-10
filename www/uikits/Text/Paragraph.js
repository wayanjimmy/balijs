import React from 'react';
import styled from 'styled-components';

const ParagraphStyled = styled.p``;

function Paragraph(props) {
  const { style } = props;
  return <ParagraphStyled style={style}>{props.children}</ParagraphStyled>;
}

export default Paragraph;
