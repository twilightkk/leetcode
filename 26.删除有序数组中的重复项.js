/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 过滤重复元素 但与题目不符合 时间O(n) 空间O(n)
// set 的增删改查时间复杂度为O(1)； new set()时间复杂度应该为O(n)吧
// 题外话 Array.include() 时间复杂度为O(n).
/* var removeDuplicates = function (nums) {
  let set = new Set(nums)
  return Array.from(set)
}; */

//快慢指针 时间O(n) 空间O(1)
var removeDuplicates = function (nums) {
  let n = nums.length
  if (n == 0) return 0
  let slow = 1, fast = 1
  while (fast < n) {
    if (nums[fast] != nums[fast - 1]) {
      nums[slow] = nums[fast]
      ++slow
    }
    ++fast
  }
  return slow
};
removeDuplicates([2, 2])
// @lc code=end

