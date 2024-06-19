import React from "react";
import './InputBar.css';
import add_images from '../../assets/add_images.svg'
import camera from '../../assets/camera.svg'
import send2 from '../../assets/send2.svg'

function InputBar() {
  return <div className="input w-full h-20">
    <div className="search-box flex" >
      <input type="text" placeholder="Message Tutor" />
      <div className="flex">
        <img src={add_images} alt="add image icon" />
        <img src={camera} alt="camera" />
        <img src={send2} alt="send icon" />
      </div>
    </div>
  </div>;
}

export default InputBar;
