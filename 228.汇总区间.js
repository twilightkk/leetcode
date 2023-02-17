/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */
/**
 * 描述
 *
给定一个  无重复元素 的 有序 整数数组 nums 。

返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

列表中的每个区间范围 [a,b] 应该按如下格式输出： 
 *
 */
/**
 * 实例
 * 
输入：nums = [0,2,3,4,6,8,9]
输出：["0","2->4","6","8->9"]
解释：区间范围是：
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

 */


// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
// 方法：保留两个指针指向 首和尾,只需判断在不连续的情况下，首尾两个指针是否相等，处理是否是放入单个数字，还是'num->num'这种格式。
// 时间:O(n)
// 空间：O(1)
var summaryRanges = function(nums) {
  let res=[]
  let n = nums.length,i=0
 while (i<n) {
  let temp = ''+nums[i]
  let j = i
  while (nums[i]==nums[i+1]-1) {
      i++
  }
  if(j<i){
      temp=temp+'->'+nums[i]
      res.push(temp)
  }else{
      res.push(temp)
  }
  i++;
 }
 return res
};
// @lc code=end

