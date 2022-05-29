const path = require('path');
const postChatMessage = require(path.resolve('./server/endpoints/post/chat.ts'));
interface ChatMessage {
  message: string,
  user: string,
};

describe('Chat message', () => {
  const input: ChatMessage = {
    message: 'Hello world',
    user: 'test',
  };
  test('should return an object with a time key and string pair added if successful', async () => {
    const res = await postChatMessage(input);
    expect(res).toEqual(expect.objectContaining(input));
    expect(res).toHaveProperty('time');
    expect(res.status).toBe(200);
  });
})