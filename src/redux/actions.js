export function increment(amount) {
  return { type: 'INCREMENT', amount };
}
export function decrement(amount) {
  return { type: 'DECREMENT', amount };
}

export function reset() {
  return { type: 'RESET' };
}
