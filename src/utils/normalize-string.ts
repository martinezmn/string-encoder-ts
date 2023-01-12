export function normalizeString(input: string): string {
  return input
    .normalize('NFKD')
    .replace(/[^a-z0-9]/gi, '')
    .toLocaleLowerCase()
    .substring(0, 64);
}
