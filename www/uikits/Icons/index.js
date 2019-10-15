import * as React from 'react';

function Icons(props) {
  const { iconName } = props;
  return <img src={`/static/${iconName}`} />;
}

export default Icons;
