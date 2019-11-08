import React from 'react';

import { CommonButton } from '../index.js';

export default { title: 'Button' };

export const commonButton = () => {
  return (
    <div style={{ display: 'flex', verticalAlign: 'center' }}>
      <CommonButton>Common Button</CommonButton>
    </div>
  );
};
