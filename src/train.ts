/*
S-TASK:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin
va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2 
*/

function missingNumber(nums: number[]): number {
    const n: number = nums.length;
    const totalSum: number = n * (n + 1) / 2;
    const sum: number = nums.reduce((acc, curr) => acc + curr, 0);
    return totalSum - sum;
}
// Test the function
console.log(missingNumber([3, 0, 1])); // Output: 2
