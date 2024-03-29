/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */
/**
 * 描述：
 * 给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。
 * 返回该 最大总和 。
 */
/**
 * 示例：
 * 
 * 输入：nums = [1,4,3,2]
 * 输出：4
 * 解释：所有可能的分法（忽略元素顺序）为：
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
所以最大总和为 4

输入：nums = [6,2,6,5,1,2]
1,2,2,5,6,6
1,2,3,4
输出：9
解释：最优的分法为 (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 方法：
 * 要想总和的值最大，则需要每两个匹配的值的插值尽可能的小
 * 1.数组从小到大排序，
 * 2. 相邻的数两两配对，计算最小，返回最小值
 * 
 * 时间：O(nlogn) 排序所需时间
 * 空间：O(logn) 排序所需要的栈的空间
 */
var arrayPairSum = function(nums) {
  let res = 0
  nums.sort((a,b)=>a-b)
  for (let i = 0; i < nums.length; i+=2) {
    res += Math.min(nums[i+1],nums[i])
  }
  return res;
};
// @lc code=end

