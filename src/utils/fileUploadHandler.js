// import fileHandler from "./inputFileHandler";
// import conf from "../conf/conf";

// const handleFileUpload = async () => {
//   try {
//     const result = await fileHandler.handleImageFile();
//     console.log(result);
//     if (result.success) {
//       const formData = new FormData();
//       formData.append("file", result.file);

//       const response = await fetch(conf.backendConfig.fileUploadUrl, {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("File uploaded successfully:", data);
//       } else {
//         console.error("Failed to upload file:", response.statusText);
//       }
//     }
//   } catch (error) {
//     console.error("Error handling file upload:", error);
//   }
// };

// export default handleFileUpload;
