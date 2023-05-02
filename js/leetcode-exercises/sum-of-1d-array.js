/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  const result = [...nums]
  for (let i = 1; i < nums.length; i += 1) {
    result[i] = result[i - 1] + result[i]
  }
  return result
}

runningSum([1, 2, 3, 4])
