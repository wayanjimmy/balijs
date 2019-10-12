import React from 'react';
import styled from 'styled-components';

const ViewStyled = styled.div``;

function View(props) {
  const { depth, style, ...otherProps } = props;
  return (
    <ViewStyled depth={depth} style={style}>
      {props.children}
    </ViewStyled>
  );
}

export default View;
