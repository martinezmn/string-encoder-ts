import { Message } from '../entities/message.js';

export default class MessageController {
  static async encode(req, res) {
    try {
      const { message } = req.body;

      if (!message) {
        throw new Error('Input `message` is required.');
      }

      const messageEntity = new Message(message);

      res.end(JSON.stringify({ encoded: messageEntity.encoded }));
    } catch (e) {
      const error = e.message ?? e;
      res.writeHead(500);
      res.end(JSON.stringify({ error }));
    }
  }
}
