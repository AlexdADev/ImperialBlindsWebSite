import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <input type="color" value={color} onChange={handleColorChange} />
      <p>El color seleccionado es: {color}</p>
    </div>
  );
}

export default ColorPicker;
