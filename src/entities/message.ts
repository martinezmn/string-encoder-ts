import { EncodeString } from '../services/encode-string.js';

interface MessageProps {
  encoded?: string;
}

export class Message {
  private props: MessageProps = {};

  public message: string;

  constructor(message: string) {
    this.message = message;
  }

  get encoded() {
    if (this.props?.encoded) {
      return this.props.encoded;
    }

    const encodeString = new EncodeString();
    this.props.encoded = encodeString.execute(this.message);

    return this.props.encoded;
  }
}
