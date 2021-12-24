/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 解题思路，
// 第一反应是每次找到相邻的重复元素删除，然后递归然后...就没有然后了╯︿╰，递归的次数也不清楚,结束条件也不知道。使用栈结构才是正解，审题要清晰，其实与消消乐类似，是全部都消除了，使用栈结构正好可以表现。
var removeDuplicates = function (s) {
  let stock = []
  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (stock.length > 0) {
      if (stock[stock.length - 1] == s[i]) {
        stock.pop()
      } else {
        stock.push(s[i])
      }
    } else {
      stock.push(s[i])
    }

  }
  return stock.join('')
};


var removeDuplicates = function (s) {
  s = s.split('')
  s = s.reduce((acc, curr, index) => {
    if (acc.length > 0 && acc[acc.length - 1] == curr) {
      acc.length--
      return acc
    } else {
      return [...acc, curr]
    }
  }, [])
  return s.join('')
};

// @lc code=end

