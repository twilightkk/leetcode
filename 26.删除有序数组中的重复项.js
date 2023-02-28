/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */
/**描述：
给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。
将最终结果插入 nums 的前 k 个位置后返回 k 。
不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */
/**
 * 示例：
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
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

