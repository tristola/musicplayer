export function getFormattedTime (seconds) {
  const displayZero = (n) => (n < 10 ? '0' + n : n)
  let justseconds = parseInt(seconds % 60, 10)
  let minutes = parseInt(seconds / 60, 10) % 60
  return displayZero(minutes) + ':' + displayZero(justseconds)
}
