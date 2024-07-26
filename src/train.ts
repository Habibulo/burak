/*
 Y-TASK:

  Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin. 
  Function arraydagi juft sonlarni yigindisini qaytarsin
  MASALAN: sumEvens([1,2,3]) return 2
*/
const sumEvens = (arr: number[]): number => {
  return arr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}

console.log(sumEvens([1, 2, 3, 4, 5, 6, 7, 8, 10])); // Output: 30
