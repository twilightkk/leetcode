/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */

/**
 * 继续118-杨辉三角特性
 * 根据组合公式可知同一行相邻两项的关系为
 * $ C_n^m=C_n^{m-1}\times\frac{n-m+1}{m} $
 * 且 $  C_n^0=1 $
*/ 

var getRow = function(rowIndex) {
  let rows= new Array(rowIndex+1).fill(0)
  rows[0]=1;
  for (let i = 1; i <= rowIndex; i++) {
    rows[i]=rows[i-1]*(rowIndex-i+1)/i;
  }
  return rows
};
// @lc code=end

