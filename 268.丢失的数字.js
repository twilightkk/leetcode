/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */
// 描述：给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
/**
 * 示例：
 * 输入：nums = [3,0,1]
  输出：2
  解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
 * 
 */ 
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法 遍历数组比较 找到不存在的就退出返回结果
// 时间O(n^2)
// 空间O(1)
var missingNumber = function(nums) {
  let res;
  for (let i = 0; i <= nums.length; i++) {
      if(!nums.includes(i)){
          res = i
          break;
      }
  }
  return res
};
// 方法二： 数学
// 高斯求和公式为  (n(n+1))/2 得到总和的数 减去 缺少的数的和，即为缺少数字
// 时间O(n)
// 空间O(1)
var missingNumber = function(nums) {
  let n =nums.length;
  let total = n*(n+1)/2
  let arrSum=0;
  for (let i = 0; i < nums.length; i++) {
    arrSum+=nums[i]
  }
  return total-arrSum
  
};
// @lc code=end

