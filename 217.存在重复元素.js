/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start

/**
 描述：
 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

 示例：
 输入：nums = [1,2,3,1]
 输出：true

 输入：nums = [1,2,3,4]
 输出：false

 输入：nums = [1,1,1,3,3,4,3,2,4,2]
 输出：true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 方法一：穷举
// 时间：O(n^2) 最坏情况下为所需为一个等差数组求和：(1+(n-1))*(n-1)/2=n(n-1)/2,最好情况下为O(n),平均时间复杂度为有序数从n(n-1)/2到0的情况，即为n(n-1)/(2*2)
// 空间：O(1)
/* var containsDuplicate = function (nums) {
  let flag = false
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] != nums[j]) {
        continue;
      } else {
        flag = true
        break;
      }
    }
  }
  return flag
}; */

// 方法二：先排序，排序后在判断是否重复
// 时间：O(n)
// 空间：O(1)
var containsDuplicate = function (nums) {
  let flag = false
  nums.sort()
  for (let i = 1,j=0; i < nums.length; i++) {
    if(nums[i]==nums[j]){
      flag=true;
      break;
    }else{
      j++
    }
    
  }
  return flag
};

// 方法三：穷举有点小low，使用set进行判断
// 时间：O(n)
// 空间：O(n)
var containsDuplicate = function (nums) {
  let set =new Set()
  for (let i = 0; i < nums.length; i++) {
    if(set.has(nums[i])){
      return true
    }else{
      set.add(nums[i])
    }
  }
  return false
};
// @lc code=end

