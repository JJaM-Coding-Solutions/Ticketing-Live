const path = require('path');
const getChatMessages = require(path.resolve('./server/endpoints/get/home.ts'));

describe('getChatMessages', () => {
  test('should return a Promise Object', () => {
    expect(getChatMessages()).toBeInstanceOf(Promise);
  });
  test('should resolve to an array of objects', async () => {
    const response = await getChatMessages();
    expect(response).toBeInstanceOf(Array);
    expect(response[0]).toBeInstanceOf(Object);
  });
});