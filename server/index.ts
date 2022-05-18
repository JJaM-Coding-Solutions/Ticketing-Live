const serverApp = require('./server.ts');

const port = 3000;

serverApp.listen(port, ()=> {
  console.log(`Now listening to port:${port}`);
});