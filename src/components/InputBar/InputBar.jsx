import React, { useRef, useEffect, useState } from "react";

import AddImgSvg from "../../assets/add_images.svg?react";
import CameraSvg from "../../assets/camera.svg?react";
import SendSvg from "../../assets/send1.svg?react";
import CloseSvg from "../../assets/close.svg?react";

import fileHandler from "../../utils/inputFileHandler";

function InputBar() {
  // following code is for auto resizing the textarea
  const textareaRef = useRef(null);

  useEffect(() => {
    const handleInput = () => {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    const textarea = textareaRef.current;
    textarea.addEventListener("input", handleInput);

    return () => {
      textarea.removeEventListener("input", handleInput);
    };
  }, []);

  // image data state
  const [imageData, setImageData] = useState({
    url: null,
    file: null,
    success: false,
  });

  // function to handle the add image button
  function handleAddImage() {
    handleRemoveImage(); // removing the image data if already present

    // handling the image file
    fileHandler
      .handleImageFile()
      .then(result => {
        if (result.success) {
          setImageData(result);
        } else {
          console.error("Error handling image file");
        }
      })
      .catch(error => {
        console.error("Error handling image file:", error);
      });
  }

  // function to handle the camera button
  function handleCamera() {
    handleRemoveImage(); // removing the image data if already present

    // handling the camera file
    fileHandler
      .handleCameraFile()
      .then(result => {
        if (result.success) {
          setImageData(result);
        } else {
          console.error("Error handling camera file");
        }
      })
      .catch(error => {
        console.error("Error handling camera file:", error);
      });
  }

  // function to remove the image data
  function handleRemoveImage() {
    setImageData({ url: null, file: null, success: false });
  }

  return (
    <div className="w-full flex flex-col justify-center items-center bg-Primary p-4">
      {/*Image preview container*/}
      <div
        className={`${imageData.success ? "flex" : "hidden"} w-full md:w-3/4 px-4 py-2 flex items-center rounded-md gap-4 relative top-2 bg-Secondary`}
      >
        <div
          className="w-16 h-16 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${imageData.url})` }}
        >
          <button className="w-16 h-16 rounded-lg bg-slate-700 opacity-0 hover:opacity-80 cursor-default">
            <CloseSvg
              onClick={handleRemoveImage}
              className="w-4 ml-6 fill-SecondarySvg"
            />
          </button>
        </div>
      </div>

      {/*Input container */}
      <div
        className="w-full md:w-3/4 px-4 py-2 flex items-center rounded-md gap-4 bg-Secondary"
        style={{ minHeight: "48px", maxHeight: "20vh" }}
      >
        <textarea
          ref={textareaRef}
          className="w-full text-base font-normal pt-2 pb-2 text-PrimaryText placeholder-PrimaryText bg-transparent border-none outline-none resize-none Add-Scrollbar"
          rows="1"
          style={{ maxHeight: "20vh" }}
          placeholder="Ask Synapse..."
        />
        <div className="flex items-center gap-4">
          <button className="w-6 h-6" onClick={handleAddImage}>
            <AddImgSvg className="w-6 h-6 fill-PrimarySvg" />
          </button>
          <button className="w-6 h-6 md:hidden" onClick={handleCamera}>
            <CameraSvg className="w-6 h-6 fill-PrimarySvg " />
          </button>
          <button
            className="w-6 h-6"
            onClick={() => console.log("Send Button")}
          >
            <SendSvg className="w-6 h-6 fill-PrimarySvg" />
          </button>
        </div>
      </div>
      <span className="w-full md:w-11/12 pt-1 text-xs text-center text-PrimaryText">
        Synapse can make mistakes. Check important information.
      </span>
    </div>
  );
}

export default InputBar;
