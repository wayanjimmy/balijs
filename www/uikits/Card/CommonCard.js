import React from 'react';
import styled from 'styled-components';
import { Thumbnail } from '../Thumbnail';
import { Headline3, Paragraph } from '../Text';

const Container = styled.div`
  margin: ${props => props.margin};
`;

/*
props = {
    data: {
        cover: string,
        title: string,
        subtitle: string
    }
    margin: string
}
*/

function CommonCard(props) {
  const { data = {}, margin } = props;
  return (
    <Container margin={margin}>
      <Thumbnail src={data.cover} alt={data.title} />
      <Headline3 align="center">{data.title || ''}</Headline3>
      <Paragraph align="center">{data.subtitle || ''}</Paragraph>
    </Container>
  );
}

export default CommonCard;
