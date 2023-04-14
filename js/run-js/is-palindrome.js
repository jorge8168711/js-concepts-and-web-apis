function isPalindrome (str = '') {
  const lowerCaseStr = str.toLowerCase()
  return lowerCaseStr === str.toLowerCase().split('').reverse().join('')
}

isPalindrome('Mom')
