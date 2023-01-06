/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 * 
 描述：
  给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
  你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
  返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
示例：
  输入：[7,1,5,3,6,4]
  输出：5
  解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

  输入：prices = [7,6,4,3,1]
  输出：0
  解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 方法一 穷举法
// 时间：O(n^2) 循环运行了n(n-1)/2
// 空间：O(1)
/* var maxProfit = function(prices) {
  let profit=0
  for (let i = 0; i < prices.length-1; i++) {
    for (let j = i+1; j <prices.length ; j++) {
      if(prices[j]-prices[i]>profit){
        profit=Math.max(0,prices[j]-prices[i])
      }
    }
  }
  return profit
}; */

// 方法二：一次遍历
// 思路为 我需要知道历史最低点在那，现在只需要将每天与最低点比较，取最大利润即为最大的利润

// 时间：O(n)
// 空间：O(1)
var maxProfit = function(prices) {
  let minPrice=Math.max(...prices)
  let profit=0;
  for (let i = 0; i < prices.length; i++) {
    if(prices[i]<minPrice){
      minPrice=prices[i]
    }else if(prices[i]-minPrice>profit){
      profit=prices[i]-minPrice
    }
  }
  return profit
};
// @lc code=end

