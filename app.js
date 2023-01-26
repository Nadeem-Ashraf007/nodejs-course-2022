const http = require("http");
const { area, circumference } = require("./circle");
const circle = require("./circle");

const c = new circle();
console.log(c.area(5));
console.log(c.circumference(5));
// console.log(area(5));
// console.log(circumference(5));
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(
//     JSON.stringify({
//       data: "Hello World!",
//     })
//   );
// });
// server.listen(3000);
