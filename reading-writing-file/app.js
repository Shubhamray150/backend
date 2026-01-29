const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <form method="POST" action="/submit">
        <label>Name:</label>
        <input type="text" name="username" />
        <button type="submit">Submit</button>
      </form>
    `);
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
