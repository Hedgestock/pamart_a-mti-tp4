import React from 'react';

const Target = ({ x = 0, y = 0, value = 0, onClick = () => {} }) => (
  <div
    style={{
      position: 'absolute',
      borderRadius: '200px',
      top: `${y}%`,
      left: `${x}%`,
      width: '25px',
      height: '25px',
      textAlign: 'center',
      lineHeight: '25px',
      cursor: 'pointer',
      backgroundColor: `#${9-9*value/3}${9-9*value/3}${9*value/3}${9*value/3}00`
    }}
    onClick={onClick}
  >
    {value}
  </div>
);

export default Target;
