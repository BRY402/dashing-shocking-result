const fastify = require('fastify');
const app = fastify();
const path = require('path');
const fs = require('fs');

app.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/", // optional: default '/'

});

app.get('/', function(request, response) {
  response.header('Content-Type', 'text/html');
  // Read index.js and return it's source for rendering
 fs.readFile(__dirname + '/index.html', 'utf-8', (err, data) => {response.send(data);});
});

app.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);
