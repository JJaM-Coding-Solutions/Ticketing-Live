const supertest = require('supertest');
const serverApp = require('../server/server.ts');

const server = supertest(serverApp);


test('is server running?', async ()=> {
  const response = await server.get('/');
  expect(response.status).toBe(200);
});
