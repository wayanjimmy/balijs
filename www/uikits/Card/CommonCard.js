import React from 'react';
import styled from 'styled-components';
import { Thumbnail } from '../Thumbnail';
import { Headline3, Paragraph } from '../Text';

const Container = styled.div``;

/*
props = {
    data: {
        cover: string,
        title: string,
        subtitle: string
    }
}
*/

function CommonCard(props) {
  const { data = {} } = props;
  return (
    <Container>
      <Thumbnail src={data.cover} alt={data.title} />
      <Headline3>{data.title || ''}</Headline3>
      <Paragraph>{data.subtitle || ''}</Paragraph>
    </Container>
  );
}

export default CommonCard;
