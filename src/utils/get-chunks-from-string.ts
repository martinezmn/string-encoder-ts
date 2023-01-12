export function getChunksFromString(input: string) {
  const columns = Math.ceil(Math.sqrt(input.length));

  const rows: string[] = [];

  while (input) {
    rows.push(input.substring(0, columns));
    input = input.substring(columns);
  }

  return rows;
}
