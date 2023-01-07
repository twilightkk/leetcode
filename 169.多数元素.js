/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

/**
描述：
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例：
输入：nums = [3,2,3]
输出：3

输入：nums = [2,2,1,1,1,2,2]
输出：2

 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：使用对象数组，遍历一遍找最大值
// 时间：O(n)
// 空间：O(n),最多包含n-((n/2)+1)个键值对,因为众数（一组数据最多的数）需要占(n/2)+1个数
/* var majorityElement = function(nums) {
  let arr=[]
  let max;
  for (let i = 0; i < nums.length; i++) {
    let index = arr.findIndex(item=>item.key==nums[i])
    if(index==-1){
      arr.push({
        key:nums[i],
        times:1
      })
    }else{
      let temp = arr.find(item=>item.key==nums[i])
      if(temp){
        temp.times++
      }
    }
  }
  let temp = arr.reduce((prev,curr)=>{
    if(curr.times>prev.times){
      return curr
    }else{
      return prev
    }
  },arr[0])
  return temp.key
}; */
// 方法一改进：使用map结构存放及查询
/* var majorityElement = function(nums) {
  let map= new Map();
  let max=0,maxKey;
  for (let i = 0; i < nums.length; i++) {
    if(!map.has(nums[i])){
      map.set(nums[i],1)
    }else{
      let times=map.get(nums[i])
      map.set(nums[i],++times)
    }
  }
  map.forEach((value,key) => {
    if(value>max){
      max=value
      maxKey=key
    }
  });
  return maxKey
}; */
// 方法二：排序
// 思路：因为众数占了n/2所以排序后的数组，n/2一定就是众数，奇偶数的两种情况下，奇数为n/2的数，偶数中有两种情况一个是少的情况一个是多的情况，这两种情况下都会覆盖n/2的下标情况。
var majorityElement = function(nums) {
  nums.sort();
  return nums[parseInt(nums.length/2)]
};


// @lc code=end

