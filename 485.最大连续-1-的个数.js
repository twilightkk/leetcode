/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */
/**
 * 描述：给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
 */
/**
 * 示例：
  输入：nums = [1,1,0,1,1,1]
  输出：3
  解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 方法一：
 * 1. 定义一个数组用来存放每个连续1的个数是多少。
 * 2. 遍历目标数组，新建计数器0，每遇到1，则当前计数器加1并且如果是最后一位时压入数组；非1则将计数器的数压入数组，并清零计数器
 * 3. 比较数组中最大的数得到结果
 */
var findMaxConsecutiveOnes = function(nums) {
  let res=[],count=0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]!==1){
      res.push(count)
      count=0;
    }else{
      count++;
      if(i==nums.length-1){
        res.push(count)
      }
    }
  }
  return res.reduce((prev,curr)=>Math.max(prev,curr),-Infinity)
};
// 优化 不使用数组直接在每次为零时比较,最大数可以发生在最后一位数，所以需要再加一位数
var findMaxConsecutiveOnes = function(nums) {
  let maxCount=0,count=0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]===1){
      count++
    }else{
      maxCount = Math.max(maxCount,count)
      count=0;
    }
  }
  maxCount = Math.max(maxCount,count)
  return maxCount
}

// @lc code=end

