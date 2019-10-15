import React from 'react';
import { Button } from '@storybook/react/demo';

import { CommonButton } from '../index.js';

export default { title: 'Button' };

export const commonButton = () => {
  return (
    <div style={{ display: 'flex', verticalAlign: 'center' }}>
      <CommonButton>Common Button</CommonButton>
    </div>
  );
};
