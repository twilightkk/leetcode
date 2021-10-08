/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 双指针 空间O(1) 时间 O(n)
/* var removeElement = function (nums, val) {
  let n = nums.length
  if (n == 0) return 0
  let slow = 0, fast = 0
  while (fast < n) {
    if (nums[fast] != val) {
      nums[slow] = nums[fast]
      ++slow
    }
    ++fast
  }
  return slow
}; */

// 双指针 分别指向头尾 空间O(1) 时间 O(n)
var removeElement = function (nums, val) {
  const n = nums.length;
  let left = 0;
  let right = n;
  while (left != right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1]
      right--;
    } else {
      left++
    }
  }
  return left;
};
removeElement([3, 2, 2, 3], 3)
// @lc code=end

