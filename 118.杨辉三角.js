/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * 描述：在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * 
 * 任务：给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 
 * 示例：
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
/**
 * 杨辉三角特征
 * 
 * 第n行的个数为n+1个
 * 第n行的第i个元素的值=第n-1行的i-1个元素+第n-1行的i-个元素
 */
/**
 * 时间复杂度：O(numRows^2)
 * 空间复杂度：O(1)
 */
var generate = function(numRows) {
  const ret =[]
  for (let i = 0; i < numRows; i++) {
    let temp=new Array(i+1).fill(1)
    for (let j = 1; j < temp.length-1; j++) {
      temp[j]=ret[i-1][j-1]+ret[i-1][j]
    }
    ret.push(temp)
  }
  return ret;
};

// @lc code=end

