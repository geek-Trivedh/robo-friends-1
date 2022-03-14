import React from 'react';

const Scroll = ({ children }) => (
  <div
    style={{ overflow: 'scroll', border: '5px solid #caf0f8', height: '800px' }}
  >
    {children}
  </div>
);
export default Scroll;
