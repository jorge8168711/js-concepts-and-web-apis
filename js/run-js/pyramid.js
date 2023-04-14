const SYMBOL = '@'
const LIMIT = 10

function drawPyramid () {
  let count = LIMIT % 2 === 0
    ? 0
    : 1

  return Array(LIMIT).fill(0).reduce((acc, _, index) => {
    const spaces = ' '.repeat(Math.abs(LIMIT - count) / 2)
    const symbols = SYMBOL.repeat(count)

    index >= Math.floor(LIMIT / 2)
      ? count -= 2
      : count += 2

    return `${acc}${spaces}${symbols}\n`
  }, '\n')
}

console.log(drawPyramid())
