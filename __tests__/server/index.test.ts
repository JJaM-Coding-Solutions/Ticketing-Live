import { response } from 'express';
import type { Response, Request, Test } from 'supertest';

const path = require('path');
const supertest = require('supertest');
const serverApp = require(path.resolve('./server/server.ts'));

const testServer = supertest(serverApp);

describe('Server app', () => {
  describe('at /', () => {
    test('should send a status of 200', async () => {
      const response = await testServer.get('/');
      expect(response.status).toBe(200);
    });
  });
  describe('at get /home endpoint', () => {
    test('should respond with an array of chat messages.', async () => {
      const response = await testServer.get('/home');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  describe('at post /chat endpoint', () => {
    const testMessage = {
      message: 'Greetings!',
      user: 'test',
    };
    const failingMessage = {
      message: {},
      user: null,
      cat: 'meow',
      time: 'u mad?',
    };
    test('should respond with a status of 200 and the same message sent with a time property using UTC format', async () => {
      const response = await testServer.post('/chat').send(testMessage);
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.objectContaining(testMessage));
      expect(response.body).toHaveProperty('time');
      expect(response.body.time).not.toBeNaN();
      expect(Date.parse(response.body.time)).not.toBeNaN();
    });
  });
});
