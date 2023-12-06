/**
 * Problem: Calculate money on leetcode Bank
 * Difficulty: Easy
 * Description: Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.

Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.
 * 
 * Soln: 
    1. Calculate the number of complete weeks (week_count = n / 7).
    2. Calculate the total contribution from complete weeks using the arithmetic sum formula for each week: ((week_count * (week_count - 1)) / 2) * 7.
    3. Calculate the total contribution from days beyond complete weeks using the arithmetic sum formula: (week_count * 28).
    4. Calculate the contribution from the remaining days (less than a week) using the arithmetic sum formula for the remaining days: ((remaining_days * (remaining_days + 1)) / 2) + (week_count * remaining_days).
    Sum up the contributions calculated in steps 2, 3, and 4 to get the total amount.
 */

let totalMoney = function(n) {
    let w = Math.floor(n / 7);
    let total_money = w * 28;
    let remaining_days = n % 7;

    total_money += (7 * w * (w - 1)) / 2;

    total_money += ((remaining_days * (remaining_days + 1)) / 2) + (w * remaining_days);

    return total_money;
};

console.log(totalMoney);