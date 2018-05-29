import React from 'react';

const Light = props => {

  const className = `light ${props.color} ${props.on?'':'off'}`;

  return (
      <div className={className} onClick={() => props.onClick(props.id)}></div>
  );
}

export default Light;
