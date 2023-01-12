import { getChunksFromString } from '../utils/get-chunks-from-string.js';
import { getStringFromChunks } from '../utils/get-string-from-chunks.js';
import { normalizeString } from '../utils/normalize-string.js';

export class EncodeString {
  execute(input: string): string {
    const normalizedMessage = normalizeString(input);

    const messageChunks = getChunksFromString(normalizedMessage);

    const encoded = getStringFromChunks(messageChunks);

    return encoded;
  }
}
