import React, { useState } from 'react';
import './ColorPicker.css';
const ColorPicker = ({colors}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Pick a color</button>
      {isOpen && (
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                display: 'inline-block',
                marginRight: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <p>You picked: <span style={{ color: selectedColor }}>{selectedColor}</span></p>
      )}
    </div>
  );
};

export default ColorPicker;
