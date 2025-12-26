const path = require("node:path");
const fs = require("node:fs");
const { EventEmitter } = require("node:events");
const eventEmitter = new EventEmitter();
const os = require("node:os");
// 1:
console.log(`{File:${__filename}, Dir:${__dirname}} `);

// 2:
function fileName(filePath) {
  return path.basename(filePath);
}
console.log(fileName("/user/files/report.pdf"));

// 3:
function pathFormat(obj) {
  return path.format(obj);
}
console.log(pathFormat({ dir: "/folder", name: "app", ext: ".js" }));

// 4:
function fileExtension(filePath) {
  return path.extname(filePath);
}
console.log(fileExtension("/docs/readme.md"));

// 5:
function pathParsing(filePath) {
  const pathObj = path.parse(filePath);
  return { Name: pathObj.name, Ext: pathObj.ext };
}
console.log(pathParsing("/home/app/main.js"));

// 6:
function isAbsolutePath(filePath) {
  return path.isAbsolute(filePath);
}
console.log(isAbsolutePath("/home/user/file.txt"));

// 7:
function joinPaths(...args) {
  return path.join(...args);
}
console.log(joinPaths("src", "components", "App.js"));

// 8:
function resolvePath(filePath) {
  return path.resolve(filePath);
}
console.log(resolvePath("./script.js"));

// 9:
function mergePaths(...paths) {
  return path.join(...paths);
}
console.log(mergePaths("/folder1", "folder2/file.txt"));

// 10:
function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) return console.log(err.message);
    console.log(`The file.txt is deleted.`);
  });
}
deleteFile("/path/to/file.txt");

// 11:
function createFolder(folderPath) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log("Success");
}
createFolder("./attachments");

// 12:
eventEmitter.on("start", () => {
  console.log("Welcome event triggered!");
});
eventEmitter.emit("start");

// 13:
eventEmitter.on("login", (userName) => {
  console.log(`User logged in:${userName}`);
});
eventEmitter.emit("login", "Ahmed");

// 14:
const data = fs.readFileSync("./notes.txt", { encoding: "utf-8" });
console.log(data);

// 15:
fs.writeFile("./async.txt", "Async Save", { flag: "w" }, (err) => {
  if (err) console.log("the file has been saved");
});

// 16:
console.log(fs.existsSync("./notes.txt"));

// 17
function getOSInfo() {
  return { platform: os.platform(), Arch: os.arch() };
}
console.log(getOSInfo());
