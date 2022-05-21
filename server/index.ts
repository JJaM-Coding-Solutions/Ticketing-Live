const app = require('./server.ts');

const port = 3000;

app.listen(port, ()=> {
  console.log(`Now listening to port:${port}`);
});