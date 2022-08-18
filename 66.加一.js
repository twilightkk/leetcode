/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start

/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
输入：digits = [9]
输出：[1,0]
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 时间O(n^2) 空间O(1)
var plusOne = function (digits) {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      ++digits[i];
      for (let j = i + 1; j < n; j++) {
        digits[j] = 0
      }
      return digits
    }
  }
  const ans = new Array(n + 1).fill(0)
  ans[0] = 1;
  return ans
};
// @lc code=end

