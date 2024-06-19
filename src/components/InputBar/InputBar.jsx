import React from "react";
import './InputBar.css';
import add_images from '../../assets/add_images.svg'
import camera from '../../assets/camera.svg'
import send2 from '../../assets/send2.svg'

function InputBar() {
  return <div className="input w-full h-20 bg-white">
    <div className="search-box flex items-center  h-12 mt-4 mr-28 mb-9 ml-8 rounded-lg justify-between " >
      <input type="textarea" placeholder="Message Tutor" className="bg-transparent text-wrap ml-6 mr-2 w-full flex-1"/>
    
      <div className="flex items-center gap-3 mr-2 justify-center">
        <img className="h-7 w-7" src={add_images} alt="add image icon" />
        <img className="h-7 w-7" src={camera} alt="camera" />
        <img className="h-7 w-7" src={send2} alt="send icon" />
      </div>
    </div>
  </div>;
}

export default InputBar;
