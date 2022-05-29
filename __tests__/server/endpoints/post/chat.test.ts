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
  test('should return a Promise', () => {
    const res = postChatMessage(input);
    expect(res).toBeInstanceOf(Promise);
  });
  test('should return an object with a time key and string pair added if successful', () => {
    const res = postChatMessage(input);
    expect(res).resolves.toEqual(expect.objectContaining(input));
    expect(res).resolves.toHaveProperty('time');
  });
  test('should reject with a thrown error if message shape is wrong', () => {
    const badInput: PoorMessage = {
      message: null,
      user: 1,
      cat: 'meow',
    };
    const res = postChatMessage(badInput);
    expect(res).rejects.toThrow('Invalid message or user');
  });
});