/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 方法一：直接合并后排序  
// 时间 : 快排的时间复杂度 O(nlogn) m长度的和n长度的数组的快排时间复杂度就为 O((m+n)log(m+n))
// 空间： 快排的空间复杂度 O(log(m+n))
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
};

// 方法二：双指针
var merge = function (nums1, m, nums2, n) {
  let sort= new Array(m+n).fill(0)
  let p1=0,p2=0;
  let curr;
  while (p1<m||p2<n) {
    if(p1===m){
      curr=nums2[p2++]
    }else if(p2===n){
      curr=nums1[p1++]
    }else if(nums1[p1]<nums2[p2]){
      curr=nums1[p1++]
    }else{
      curr=nums2[p2++]
    }
    sort[p1+p2-1]=curr
  }
  for (let i = 0; i < (m+n); i++) {
    nums1[i]=sort[i]
  }
};
// @lc code=end

