import * as React from 'react';
import styled from 'styled-components';

/*
props = {
  iconName: 'calendar', 'location-point',
  ext: 'svg', 'png'
}
*/

const Icon = styled.img`
  height: 24px;
  width: 24px;
  margin: 0 5px;
`;

function Icons(props) {
  const { iconName, ext = 'svg', path } = props;
  let src = `/static/icons/${iconName}.${ext}`;
  if (path) {
    src = `${path}${src}`;
  }
  return <Icon src={src} />;
}

export default Icons;
