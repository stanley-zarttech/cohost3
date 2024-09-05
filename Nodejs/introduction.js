// Create a basic nodejs server
// server.mjs
const { createServer } = require("node:http");
const { readTestFile } = require("./fs_module");
const server = createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const content = await readTestFile("./test.txt");
  res.write(content, (err) => {
    if (err) {
      console.log("Error writing to res object ", err);
    } else {
      console.log("file content written to res object");
    }
  });
  res.end("<h1 style='color:red'>Hello World!</h1>\n");
});
// starts a simple http server locally on port 3000
server.listen(3001, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
// run with `node server.mjs`
