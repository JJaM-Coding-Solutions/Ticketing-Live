import { response } from 'express';
import type { Response, Request, Test } from 'supertest';

const path = require('path');
const supertest = require('supertest');
const serverApp = require(path.resolve('./server/server.ts'));

const testServer = supertest(serverApp);

describe('Server app', ()=> {
  describe('at /', ()=> {
    test('should send a status of 200', async()=> {
      const response = await testServer.get('/');
      expect(response.status).toBe(200);
    });
  });
  describe('at get /home', () => {
    test('should return an array of chat messages.', () => {

    });
  });
});
