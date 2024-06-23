import { React, useRef, useEffect } from "react";
import AddImgSvg from "../../assets/add_images.svg?react";
import CameraSvg from "../../assets/camera.svg?react";
import SendSvg from "../../assets/send1.svg?react";

function InputBar() {
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

  return (
    <div className="w-full flex flex-col justify-center items-center bg-Primary p-4">
      <div
        className="w-full md:w-3/4 px-4 py-2 flex items-center rounded-md gap-4 bg-Secondary"
        style={{ minHeight: "48px", maxHeight: "20vh" }}
      >
        <textarea
          ref={textareaRef}
          className="w-full text-base font-normal text-PrimaryText placeholder-PrimaryText bg-transparent border-none outline-none resize-none overflow-hidden Add-Scrollbar-Y"
          rows="1"
          style={{ maxHeight: "20vh" }}
          placeholder="Ask Synapse a question..."
        />
        <div className="flex items-center gap-4">
          <button className="w-6 h-6">
            <AddImgSvg className="w-6 h-6 fill-PrimarySvg" />
          </button>
          <button className="w-6 h-6 md:hidden">
            <CameraSvg className="w-6 h-6 fill-PrimarySvg " />
          </button>
          <button className="w-6 h-6">
            <SendSvg className="w-6 h-6 fill-PrimarySvg" />
          </button>
        </div>
      </div>
      <span className="w-full md:w-11/12 pt-1 text-xs text-center text-PrimaryText">Synapse can make mistakes. Check important information.</span>
    </div>
  );
}

export default InputBar;
