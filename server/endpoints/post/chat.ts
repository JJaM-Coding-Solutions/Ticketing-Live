interface Message {
  message: string,
  user: string,
};
interface SuccessfulPostMessage extends Message {
  time: string,
};

const postChat = async (postMessage: unknown) => {
  const { message, user } = postMessage as Message;
  if ( typeof message !== 'string' || typeof user !== 'string' ) {
    throw new Error('Invalid message or user');
  }
  const decoratedObject: SuccessfulPostMessage = Object.assign({time: new Date().toISOString()}, postMessage);
  //TODO: add database logic here
  const postDB = await decoratedObject;
  return postDB;
};

module.exports = postChat;