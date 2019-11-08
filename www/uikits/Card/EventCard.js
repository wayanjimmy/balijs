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
    thumbnail: string, 
    time: string,
    place: string,
    speaker: string
  }
}
*/

const Container = styled.div`
  max-width: 750px;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.06);
  margin: auto;
  overflow: hidden;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.2);
`;

function EventCard(props) {
  const { data = {} } = props;
  return (
    <Container>
      <View style={{ flex: 1, padding: '20px' }}>
        <View style={{ flex: 1 }}>
          <View>
            <Headline3 variant="playFair" size="large">
              {data.title}
            </Headline3>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          >
            <Icons iconName="calendar" path="http://localhost:3000" />
            <Text color="pencil" size="small">
              {data.time}
            </Text>
            <Icons iconName="location-point" path="http://localhost:3000" />
            <Text color="pencil" size="small">
              {data.place}
            </Text>
          </View>
          <View>
            <Text color="pencil">Speaker: &nbsp;</Text>
            <Text>{data.speaker}</Text>
          </View>
        </View>
        <View style={{ margin: '20px 0' }}>
          <CommonButton>Going</CommonButton>
        </View>
      </View>
      <View style={{ flex: 1, backroundColor: colorPalette.yellow }}>
        <Thumbnail src={data.thumbnail} alt={data.title} />
      </View>
    </Container>
  );
}

export default EventCard;
