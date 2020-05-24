export function limitStr (text, limit) {
  if (text.length <= limit) {
    return text;
  }

  return text.slice(0, limit - 3) + '...';
}
