import React from 'react';
import styled from 'styled-components';

const Headline3Styled = styled.h3``;

function Headline3(props) {
  const { style } = props;
  return <Headline3Styled style={style}>{props.children}</Headline3Styled>;
}

export default Headline3;
