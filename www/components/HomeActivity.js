import React from 'react';
import styled from 'styled-components';

import { Headline2, SeparatorSmall, Columns, Column, CommonCard } from '../uikits';

const ActivityContainer = styled.div`
  max-width: 600px;
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
              cover: 'http://via.placeholder.com/200x200',
              title: 'Meeting',
              subtitle: 'Dinner still nation challenge subject explain hope society.',
            }}
          />
        </Column>
        <Column>
          <CommonCard
            data={{
              cover: 'http://via.placeholder.com/200x200',
              title: 'Learning',
              subtitle: 'Dinner still nation challenge subject explain hope society.',
            }}
          />
        </Column>
        <Column>
          <CommonCard
            data={{
              cover: 'http://via.placeholder.com/200x200',
              title: 'Creating',
              subtitle: 'Dinner still nation challenge subject explain hope society.',
            }}
          />
        </Column>
      </Columns>
    </ActivityContainer>
  );
}

export default HomeActivity;
