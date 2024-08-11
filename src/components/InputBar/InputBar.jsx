import React, { useContext, useRef, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import socket from "../../socket/socket";
import AddImgSvg from "../../assets/add_images.svg?react";
import CameraSvg from "../../assets/camera.svg?react";
import SendSvg from "../../assets/send1.svg?react";
import CloseSvg from "../../assets/close.svg?react";
import fileHandler from "../../utils/inputFileHandler";
import expertDetail from "../../utils/expertDetail";
import { SessionContext } from "../../context/SessionContext";

let handleSubmit;

function InputBar() {
  const navigate = useNavigate();
  const {
    prompt,
    setPrompt,
    fileData,
    setFileData,
    sessionHistory,
    activeSession,
    setActiveSession,
  } = useContext(SessionContext);
  const textareaRef = useRef(null);
  const { expertId, sessionId } = useParams();
  const sesType = expertId || "learning";
  const { title } = expertDetail(sesType);

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

  const handleFileOperation = useCallback(
    async operation => {
      handleRemoveImage();
      try {
        const result = await fileHandler[operation]();
        if (result.success) {
          setFileData(result);
        } else {
          console.error(`Error handling ${operation} file`);
        }
      } catch (error) {
        console.error(`Error handling ${operation} file:`, error);
      }
    },
    [setFileData]
  );

  const handleRemoveImage = useCallback(() => {
    setFileData({ url: null, file: null, success: false });
    fileHandler.handleRemoveFile();
  }, [setFileData]);

  handleSubmit = useCallback(
    async e => {
      //e.preventDefault();
      const backendSession = {
        sessionType: sesType,
        prompt: prompt,
        imageOrigin: fileData?.origin || null,
        history: sessionHistory,
      };

      if (fileData?.success) {
        try {
          const result = await fileHandler.handleFileUpload();
          backendSession.imageOrigin = result.origin; // set image origin

          setFileData(prev => ({ ...prev, origin: result.origin }));
          socket.emit("generate", backendSession);
          socket.emit("upload", result.origin);
        } catch (error) {
          console.error("Error handling file upload:", error);
        }
      } else {
        socket.emit("generate", backendSession);
      }

      setActiveSession({
        sessionId: sessionId == undefined ? 0 : sessionId,
        isActive: true,
      });

      textareaRef.current.value = "";
      handleRemoveImage();

      if (!sessionId) navigate(`/app/chat/${sesType}/0`);
    },
    [
      sesType,
      prompt,
      fileData,
      sessionHistory,
      setFileData,
      sessionId,
      navigate,
      handleRemoveImage,
    ]
  );

  return (
    <div className="w-full flex flex-col justify-center items-center bg-Primary p-4">
      <div
        className={`${fileData?.success ? "flex" : "hidden"} w-full md:w-3/4 px-4 py-2 flex items-center rounded-md gap-4 relative top-2 bg-Secondary`}
      >
        <div
          className="w-16 h-16 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${fileData?.url})` }}
        >
          <button className="w-16 h-16 rounded-lg bg-slate-700 opacity-0 hover:opacity-80 cursor-default">
            <CloseSvg
              onClick={handleRemoveImage}
              className="w-4 ml-6 fill-SecondarySvg"
            />
          </button>
        </div>
      </div>
      <div
        className="w-full md:w-3/4 px-4 py-2 flex items-center rounded-md gap-4 bg-Secondary"
        style={{ minHeight: "48px", maxHeight: "20vh" }}
      >
        <form onSubmit={handleSubmit} className="w-full">
          <textarea
            ref={textareaRef}
            className="w-full text-base font-normal pt-2 pb-2 text-PrimaryText placeholder-PrimaryText bg-transparent border-none outline-none resize-none Add-Scrollbar"
            rows="1"
            style={{ maxHeight: "20vh" }}
            placeholder={
              sesType === "learning" ? "Ask Synapse" : `Ask ${title} Expert`
            }
            onChange={e => {
              setPrompt(e.target.value);
            }}
          />
        </form>
        <div className="flex items-center gap-4">
          <button
            className="w-6 h-6"
            onClick={() => handleFileOperation("handleImageFile")}
            {...(activeSession.isActive ? { disabled: true } : {})}
          >
            <AddImgSvg className="w-6 h-6 fill-PrimarySvg" />
          </button>
          <button
            className="w-6 h-6 md:hidden"
            onClick={() => handleFileOperation("handleCameraFile")}
            {...(activeSession.isActive ? { disabled: true } : {})}
          >
            <CameraSvg className="w-6 h-6 fill-PrimarySvg" />
          </button>
          <button
            className="w-6 h-6"
            type="submit"
            onClick={handleSubmit}
            {...(activeSession.isActive ? { disabled: true } : {})}
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

export { handleSubmit };

export default InputBar;
