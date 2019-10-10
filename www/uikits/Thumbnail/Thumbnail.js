import React from 'react';
import stytled from 'styled-components';

const ThumbnailContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  display: block;
`;

function Thumbnail(props) {
  const { src, alt = 'thumbnail' } = props;
  return <ThumbnailContainer>{src && <ThumbnailImage src={src} alt={alt} />}</ThumbnailContainer>;
}

export default Thumbnail;
