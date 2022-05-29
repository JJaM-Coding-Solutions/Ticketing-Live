const path = require('path');
const postChatMessage = require(path.resolve('./server/endpoints/post/chat.ts'));
interface ChatMessage {
  message: string,
  user: string,
};
interface PoorMessage {
  message: null,
  user: number,
  cat: string,
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
  test('should reject with a thrown error if message shape is wrong', async () => {
    const badInput: PoorMessage = {
      message: null,
      user: 1,
      cat: 'meow',
    };
    const res = await postChatMessage(badInput);
    expect(res).rejects.toThrow('Invalid message or user');
  });
});