export const lightTheme = {
  backgroundColor: '#fff',
  textColor: '#000',
  redButton: '#D35400',
  greenButton: '#2ECC71',
  blueButton: '#007BFF',
  black: '#000',
  white: '#fff',
  grayText: '#808080'
}

export const darkTheme = {
  backgroundColor: '#000',
  textColor: '#fff',
  redButton: '#D35400',
  greenButton: '#2ECC71',
  blueButton: '#007BFF',
  black: '#000',
  white: '#fff',
  grayText: '#808080'
}


export type Theme = typeof lightTheme | typeof darkTheme
