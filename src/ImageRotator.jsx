import React, { useState } from 'react';

const ImageRotator = () => {
  const [angle, setAngle] = useState(0);

  const handleScroll = (e) => {
    const newAngle = Math.floor((e.target.value / 100) * 360);
    setAngle(newAngle);
  };
  
  const getImageSrc = (angle) => {
    const numImages = 10;
    const increment = 360 / numImages;
    const closestAngle = Math.round(angle / increment) * increment;
    return `/images/bill_${closestAngle}.png`;
  };

  return (
    <div>
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <img src={getImageSrc(angle)} alt="billete" style={{ width: '300px', height: '150px' }} />
      </div>
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={angle}
        onChange={handleScroll}
        style={{ width: '300px', marginTop: '20px' }}
      />
    </div>
    </div>
  );
};

export default ImageRotator;
