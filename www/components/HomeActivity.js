import React from 'react';
import styled from 'styled-components';

import { Headline2, SeparatorSmall, Columns, Column, CommonCard } from '../uikits';

const ActivityContainer = styled.div`
  max-width: 900px;
  margin: auto;
`;

function HomeActivity(props) {
  return (
    <ActivityContainer>
      <Headline2 align="center">What We Do</Headline2>
      <SeparatorSmall />
      <Columns>
        <Column>
          <CommonCard
            data={{
              cover: '/static/act-1.svg',
              title: 'Meeting',
              subtitle: 'Dinner still nation challenge subject explain hope society.',
            }}
            margin="5px 20px"
          />
        </Column>
        <Column>
          <CommonCard
            data={{
              cover: '/static/act-2.svg',
              title: 'Learning',
              subtitle: 'Dinner still nation challenge subject explain hope society.',
            }}
            margin="5px 20px"
          />
        </Column>
        <Column>
          <CommonCard
            data={{
              cover: '/static/act-1.svg',
              title: 'Creating',
              subtitle: 'Dinner still nation challenge subject explain hope society.',
            }}
            margin="5px 20px"
          />
        </Column>
      </Columns>
    </ActivityContainer>
  );
}

export default HomeActivity;
