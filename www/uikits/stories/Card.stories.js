import React from 'react';
import { EventCard } from '../index';

export default { title: 'Card' };

export const eventCard = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <EventCard
        data={{
          title: 'this is title',
        }}
      />
    </div>
  );
};
