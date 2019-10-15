import * as React from 'react';
import { Icons } from '../index';

export default { title: 'Icons' };

export const eventCard = () => {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Icons iconName="calendar" path="http://localhost:3000" />
      </div>
      <div>
        <Icons iconName="location-point" path="http://localhost:3000" />
      </div>
    </React.Fragment>
  );
};
