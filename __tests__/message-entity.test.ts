import { Message } from '../src/entities/message.js';

describe('message entity', () => {
  it('should be able to instanciate a class', () => {
    const message = new Message(
      "That's one small step for man, one giant leap for mankind.",
    );

    expect(message).toBeInstanceOf(Message);
  });

  it('should be able to encode a message', () => {
    const message = new Message(
      "That's one small step for man, one giant leap for mankind.",
    );

    expect(message.encoded).toBe(
      'tetaafi hsennon ampotrd tafnlm sloeea olrgan nsmipk',
    );
  });

  it('should be able to encode a message longer than 64 characters', () => {
    const message = new Message(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    );

    expect(message.encoded).toBe(
      'luinriem omtsando rdaedgdd eomcieot mletplee ioteiiim prctstup ssoucsso',
    );
  });
});
