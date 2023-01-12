export function getStringFromChunks(stack: string[]): string {
  const encodedLength = stack.join('').length;

  const columns = Math.ceil(Math.sqrt(encodedLength));

  let encoded = '';
  for (let i = 0; i < columns; i++) {
    for (const row of stack) {
      encoded += row[i] ?? '';
    }

    encoded += ' ';
  }

  return encoded.trim();
}
