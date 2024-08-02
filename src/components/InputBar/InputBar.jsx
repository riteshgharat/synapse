import React, { useRef, useEffect, useState } from "react";
import conf from "../../conf/conf";
import { useLocation } from "react-router-dom";

import io from "socket.io-client";
const socket = io(conf.backendConfig.baseUrl);

import AddImgSvg from "../../assets/add_images.svg?react";
import CameraSvg from "../../assets/camera.svg?react";
import SendSvg from "../../assets/send1.svg?react";
import CloseSvg from "../../assets/close.svg?react";

import fileHandler from "../../utils/inputFileHandler";

import firebaseDB from "../../firebase/db";

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
    fileHandler.handleRemoveFile();
  }

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [fileOrigin, setFileOrigin] = useState(null);

  // get the current location
  const { pathname } = useLocation();

  var sesType = pathname.split("/").pop(); // get the session type from the pathname i.e last part of the pathname
  
  var session = {
    id: socket.id,
    sessionType: sesType,
    prompt: prompt,
    imageOrigin: fileOrigin,
    history: null,
    // history: [
    //   {
    //     role: "user",
    //     parts: [
    //       {
    //         text: "explain me thermodynamics",
    //       },
    //     ],
    //   },
    //   {
    //     role: "model",
    //     parts: [
    //       {
    //         text: "Thermodynamics is a branch of physics that deals with heat and its relation to other forms of energy. It's all about how energy is transferred and transformed in physical systems. Here's a breakdown of its key concepts:\n\n* **Heat:** Heat is the transfer of thermal energy between objects at different temperatures.\n* **Temperature:** Temperature is a measure of the average kinetic energy of the particles within a system.\n* **Internal Energy:** Internal energy is the total energy stored within a system due to the motion and interaction of its particles.\n* **Work:** Work is done when a force acts over a distance. In thermodynamics, it's often associated with changes in volume.\n* **First Law of Thermodynamics:** This law states that energy cannot be created or destroyed, only transferred or transformed.  It's basically a statement of conservation of energy applied to thermodynamic systems. \n* **Second Law of Thermodynamics:** This law states that the entropy of an isolated system always increases over time. Entropy is a measure of disorder or randomness within a system. In simple terms, it means things tend to become more disordered over time.\n* **Third Law of Thermodynamics:** This law states that the entropy of a system approaches a constant value as the temperature approaches absolute zero. This is essentially saying that at absolute zero, there is no thermal motion, and the system is in its most ordered state. \n\nThermodynamics has numerous applications in various fields, including:\n\n* **Engineering:** Designing engines, power plants, and refrigeration systems.\n* **Chemistry:** Understanding chemical reactions and their energy changes.\n* **Biology:** Studying energy flow in living organisms.\n* **Cosmology:** Understanding the evolution of the universe.\n\nWould you like to dive deeper into any specific aspect of thermodynamics? For example, we could discuss how the laws of thermodynamics apply to engines, or how entropy relates to the concept of disorder. Let me know!\n",
    //       },
    //     ],
    //   },
    // ],
  };

  useEffect(() => {
    socket.on("generateRes", data => {
      setResponse(prev => prev + data);
      console.log(data);
      if (data.includes("RGC:END")) {
        firebaseDB
          .createSession(session)
          .then(sessionId => {
            console.log("Session created with ID:", sessionId);
          })
          .catch(error => {
            console.error("Error creating session:", error);
          });
      }
    });

    socket.on("uploadRes", result => {
      console.log(result);
    });

    socket.on("error", error => {
      alert("Error:", error);
    });

    return () => {
      socket.off("generateRes");
      socket.off("uploadRes");
      socket.off("error");
    };
  }, []);

  function handleSubmit(e) {
    console.log("Submit button clicked");
    console.log(session);

    e.preventDefault();
    console.log(imageData);
    if (imageData.success) {
      fileHandler
        .handleFileUpload()
        .then(result => {
          console.log(result);
          setFileOrigin(result.origin);
          socket.emit("generate", session);
          socket.emit("upload", result.origin);
        })
        .catch(error => {
          console.error("Error handling file upload:", error);
        });
    } else {
      console.log("No image data");
      socket.emit("generate", session);
    }

    setResponse(""); // Clear previous response
    textareaRef.current.value = ""; // Clear the textarea

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
        <form onSubmit={handleSubmit} className="w-full">
          <textarea
            ref={textareaRef}
            className="w-full text-base font-normal pt-2 pb-2 text-PrimaryText placeholder-PrimaryText bg-transparent border-none outline-none resize-none Add-Scrollbar"
            rows="1"
            style={{ maxHeight: "20vh" }}
            placeholder={(sesType=="learning"|| sesType=="text")?"Ask Synapse...":`Ask ${sesType.charAt(0).toUpperCase() + sesType.slice(1)} Expert...`}
            onChange={e => setPrompt(e.target.value)}
          />
        </form>
        <div className="flex items-center gap-4">
          <button className="w-6 h-6" onClick={handleAddImage}>
            <AddImgSvg className="w-6 h-6 fill-PrimarySvg" />
          </button>
          <button className="w-6 h-6 md:hidden" onClick={handleCamera}>
            <CameraSvg className="w-6 h-6 fill-PrimarySvg " />
          </button>
          <button className="w-6 h-6" onClick={handleSubmit}>
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
