import React from 'react';
import { EventCard } from '../index';

export default { title: 'Card' };

export const eventCard = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <EventCard
        data={{
          title: 'The great war against typesript uses flowtype',
          thumbnail: 'https://via.placeholder.com/300/09f/fff.png',
          time: 'July 10 - 18.00 WITA',
          place: 'Hub Bali, Seminyak',
          speaker: 'John Doe',
        }}
      />
    </div>
  );
};
