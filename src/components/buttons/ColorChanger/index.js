import React, { Component } from 'react';

import "./index.css";

class ColorChanger extends Component {

  getRandomColor = () => {
    return ("rgb(" + (Math.floor(Math.random() * (190 - 185 + 1)) + 185) + "," + (Math.floor(Math.random() * (225 - 185 + 1)) + 185) + "," + (Math.floor(Math.random() * (225 - 185 + 1)) + 185) + ")");
  }

  render() {
    return (
      <div className="color-changer">
        <button
          onClick={() => document.body.style.backgroundColor = this.getRandomColor()}
        >
          thanks for looking!
        </button>
      </div>
    )
  }
}

export default ColorChanger;
