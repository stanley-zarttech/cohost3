// const fs = require("node:fs");
const {
  unlink,
  unlinkSync,
  writeFileSync,
  mkdir,
  appendFile,
  readFileSync,
} = require("node:fs");

async function deleteFile(path) {
  try {
    await unlinkSync(path);
    console.log("file removed successfully");
  } catch (error) {
    console.log("error removing file: ", error);
  }
}
function createFolder(path) {
  mkdir(path, (err) => {
    if (err) {
      console.log("Error creating directory", err);
    } else {
      console.log("Directory created successfully: ");
    }
  });
}
async function createFile(path) {
  try {
    await writeFileSync(path, "This is created with Fs writeFileSync function");
    console.log("directory created");
  } catch (error) {
    console.log("Error creating directory: ", error);
  }
}
async function appendTextToFile(path) {
  appendFile(path, "\n\nThis content was append to existing file", (err) => {
    if (err) {
      console.log("Error appending to a file: ", err);
    } else {
      console.log("Text appended to file: ");
    }
  });
}
const readTestFile = async (path) => {
  try {
    const content = readFileSync(path, { encoding: "utf8" });
    console.log("file content: ", content);
    return content;
  } catch (error) {
    console.log("Error reading file: ", error);
  }
};
// appendTextToFile("./test.txt");
readTestFile("./test.txt");
// deleteFile("./test.txt");
// createFile("./test.txt");

module.exports = {
  readTestFile,
  appendFile,
  createFile,
  createFolder,
  deleteFile,
};
