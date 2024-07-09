/*
S-TASK:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin
va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2 
*/

// function missingNumber(num: number[]) {
//     let min = 0, max = 0, missNum = [];
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] < min) {
//             min = num[i];
//         }
//         else if (num[i] > max) {
//             max = num[i];
//         }
//     }
//     for (let i = min; i <= max; i++) {
//         if (!num.includes(i)) {
//             missNum.push(i);
//         }
//     }
//     console.log(missNum);
// }


function missingNumber(arr: number[]) {
    const missingNumbers: Number[] = []
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const numSet = new Set(arr);
    for (let i = min; i <= max; i++) {
      if (!numSet.has(i)) {
        missingNumbers.push(i);
      }
    }
    return missingNumbers
  }
console.log(missingNumber([100, 10, 200]));