import imageCompression from "browser-image-compression";

class FileHandler {
  constructor() {
    this.result = {
      url: null,
      file: null,
      success: false,
    };
  }

  handleImageFile() {
    return new Promise((resolve, reject) => {
      // Create an input element of type file
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*"; // Accept only image files

      // Listen for the file selection event
      fileInput.onchange = e => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
          this.readFileData(file)
            .then(dataUrl => {
              this.result.url = dataUrl;
              this.result.file = file;
              this.result.success = true;
              resolve(this.result); // Resolve the promise with the result
            })
            .catch(error => {
              reject(error); // Reject the promise if there's an error
            });
        } else {
          reject(new Error("No file selected"));
        }
      };

      // Trigger the file input dialog
      fileInput.click();
    });
  }

  handleCameraFile() {
    return new Promise((resolve, reject) => {
      // Create an input element of type file
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*"; // Accept only image files
      fileInput.capture = "environment"; // Use "user" for the front camera

      // Listen for the file selection event
      fileInput.onchange = e => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
          this.readFileData(file)
            .then(dataUrl => {
              this.result.url = dataUrl;
              this.result.file = file;
              this.result.success = true;
              resolve(this.result); // Resolve the promise with the result
            })
            .catch(error => {
              reject(error); // Reject the promise if there's an error
            });
        } else {
          reject(new Error("No file selected"));
        }
      };

      // Trigger the file input dialog
      fileInput.click();
    });
  }

  readFileData(file) {
    return new Promise((resolve, reject) => {
      console.log(file);
      if (file) {
        if (file.size < 2 * 1024 * 1024) {
          // Check if the file size is less than 2MB
          // Use FileReader to read the file's data URL
          const reader = new FileReader();
          reader.onload = loadEvent => {
            resolve(loadEvent.target.result); // Resolve the promise with the file data URL
          };
          reader.onerror = error => {
            reject(error); // Reject the promise if there's an error
          };
          reader.readAsDataURL(file); // Read the file as a data URL
        } else {
          // alert("File is too large. Please select a file less than 2MB.");
          // reject(new Error("File is too large"));
          this.compressImage(file)
            .then(compressedFile => {
              console.log(compressedFile);
              const reader = new FileReader();
              reader.onload = loadEvent => {
                resolve(loadEvent.target.result); // Resolve the promise with the file data URL
              };
              reader.onerror = error => {
                reject(error); // Reject the promise if there's an error
              };
              reader.readAsDataURL(compressedFile); // Read the file as a data URL
            })
            .catch(error => {
              reject(error); // Reject the promise if there's an error
            });
        }
      } else {
        reject(new Error("No file selected")); // Reject the promise if no file is selected
      }
    });
  }

  // Function to compress the image
  async compressImage(file, maxSizeMB = 2) {
    const options = {
      maxSizeMB: maxSizeMB,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      console.log(compressedFile);

      if (compressedFile.size / 1024 / 1024 < 2) {
        return compressedFile;
      } else {
        alert("Compressed image is still larger than 2MB");
      }
    } catch (error) {
      console.error("Error compressing image:", error);
      throw error;
    }
  }
}

// Create an instance of the FileHandler class
const fileHandler = new FileHandler();

export default fileHandler;
