import React from 'react';
import "../css/buttonGroup.css";

export const ButtonGroup = () => {
 
  return (
      <form>
          <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
          <input type="number" id="number" value="0" />
          <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
      </form>
  )
}
