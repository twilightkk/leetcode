/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */
/**
 * 描述：
 * 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
 */
/**
 * 示例：
 * 输入：[3, 2, 1]
输出：1
解释：第三大的数是 1 。

输入：[2, 2, 3, 1]
输出：1
 */

// @lc code=start
/**
 * 方法一：遍历
 * 1.定义一个三个数的队列用来保存最大到第三大的数
 * 2.按从小到大排序数组，并将数组第一个压入队列的队尾
 * 3.遍历数组，遍历的时候将比队尾值大的压入队列尾部
 * 4.等于3就返回队首元素，小于3就返回队尾元素
 */
/**
 * 时间O(nlogn) 排序需要 O(nlog⁡n)的时间
 * 空间O(logn) 排序需要的栈空间为 O(logn)。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let queue = []
  nums.sort((a,b)=>a-b)
  queue.push(nums[0])
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]>queue[queue.length-1]){
      if(queue.length<3){
        queue.push(nums[i])
      }else{
        queue.shift()
        queue.push(nums[i])
      }
    }
  }
  if(queue.length==3){
    return queue[0]
  }else{
    return queue[queue.length-1]
  }
};
// @lc code=end

