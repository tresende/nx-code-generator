export const capitalize = (text: string) => {
  if (text.length <= 1) return text.toUpperCase()
  return text.charAt(0).toUpperCase().concat(text.slice(1))
}

export const toPascalCase = (text: string) => {
  return capitalize(text.replace(/-([a-z])/g, (g) => g[1].toUpperCase()))
}

export const removeFirstLetterIfIsChar = (char: string, text: string) => {
  const firstLetter = text[0]
  if (firstLetter === char) {
    text = text.slice(1)
  }
  return text
}
