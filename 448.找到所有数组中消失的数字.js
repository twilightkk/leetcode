/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */
/**
 * 描述：
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 */
/**
 * 示例：
 * 输入：nums = [4,3,2,7,8,2,3,1]
   输出：[5,6]

   输入：nums = [1,1]
   输出：[2]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * 方法一： 遍历
 * 1. 遍历nums数组存入set结构
 * 2. 根据nums的长度，遍历[1,n]同时比较是否存在于set结构中，将不存在的数，放入新数组中
 */

var findDisappearedNumbers = function(nums) {
  let set = new Set(),res=[];
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }
  for (let j = 1; j <= nums.length; j++) {
    if(!set.has(j)){
      res.push(j)
    }
  }
  return res
};

/**
 * 方法二：每个数加n(取模后)后，判断是否大于n
 * 1. 条件一：想要找出缺少的数需要通过长度为n的哈希表，在遍历目标数组的时候比较哈希表判断是否缺少。条件二：然而1到n的数组其中的序号正好一一对应着hash表可以替换哈希表，然后如果[1,n]中相加n必定是大于n的。
 * 2. 有这两条件后，这样遍历数组中的每个数，将其视为hash表的序号，将该序号中的数加n,注意该序号中的数需要取模来还原原本的数，因为可能同一序号的数加了很多次
 * 2. 遍历目标数组，判断在每个数组序号中的数是否大于n，如果不是则说明缺少该数。
 */
var findDisappearedNumbers = function(nums) {
  let n = nums.length,res=[]
  for (const num of nums) {
    let x = (num-1)%n
    nums[x]+=n
  }
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]<=n){
      res.push(i+1)
    }
  }
  return res
};
// @lc code=end

