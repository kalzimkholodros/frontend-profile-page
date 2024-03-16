// CustomIcon.js

import React from 'react';
import './CustomIcon.css';

const CustomIcon = ({ iconSrc, alt }) => {
  return (
    <div className="custom-icon-container">
      <div className="custom-icon">
        <img src={iconSrc} alt={alt} />
      </div>
    </div>
  );
}

export default CustomIcon;
