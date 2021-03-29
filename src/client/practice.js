var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};

var res = maxProfit([7, 1, 5, 3, 6, 4]);

console.log(res);
