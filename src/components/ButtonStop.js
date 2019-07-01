import React from 'react';

const ButtonStop = ({ onClick = () => {} }) => (
  <div
    style={{
      position: 'fixed',
      borderRadius: '5px',
      top: '10px',
      left: '10px',
      width: '60px',
      height: '20px',
      fontSize: '13px',
      fontWeight: 'bold',
      textAlign: 'center',
      cursor: 'pointer',
      backgroundColor: '#E04B72',
      color: '#21222C'
    }}
    onClick={onClick}
  >
    STOP !
  </div>
);

export default ButtonStop;
