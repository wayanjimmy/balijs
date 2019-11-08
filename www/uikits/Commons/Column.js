import React from 'react';

export function Columns(props) {
  return <div className="columns">{props.children}</div>;
}

function Column(props) {
  return <div className="column">{props.children}</div>;
}

export default Column;
