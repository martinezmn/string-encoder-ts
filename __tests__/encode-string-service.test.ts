import { EncodeString } from '../src/services/encode-string.js';

describe('encode string service', () => {
  it('should be able to encode an input message', () => {
    const encodeString = new EncodeString();

    const encoded = encodeString.execute(
      "That's one small step for man, one giant leap for mankind.",
    );

    expect(encoded).toBe('tetaafi hsennon ampotrd tafnlm sloeea olrgan nsmipk');
  });

  it('should be able to encode an input message longer than 64 characters', () => {
    const encodeString = new EncodeString();

    const encoded = encodeString.execute(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    );

    expect(encoded).toBe(
      'luinriem omtsando rdaedgdd eomcieot mletplee ioteiiim prctstup ssoucsso',
    );
  });
});
