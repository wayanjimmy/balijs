import React from 'react';
import styled from 'styled-components';

import { View } from '../Commons';
import { CommonButton } from '../Button';
import { Thumbnail } from '../Thumbnail';
import Icons from '../Icons';
import { Headline3, Paragraph, Text } from '../Text';
import { colorPalette } from '../configs';

/*
props = {
  data: {
    title: string,
    thumbnail: string
  }
}
*/

const Container = styled.div`
  max-width: 500px;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.06);
  margin: auto;
  overflow: hidden;
`;

function EventCard(props) {
  const { data } = props;
  return (
    <Container>
      <View style={{ flex: 1, padding: '20px' }}>
        <Headline3 variant="playFair">{data.title}</Headline3>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Icons iconName="calendar" path="http://localhost:3000" />
          <Text color="pencil">July 10 - 18.00 WITA</Text>
        </View>
        <CommonButton>Going</CommonButton>
      </View>
      <View style={{ flex: 1, backroundColor: colorPalette.yellow }}>
        <Thumbnail src="https://via.placeholder.com/300/09f/fff.png" />
      </View>
    </Container>
  );
}

export default EventCard;
