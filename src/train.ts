/* 
  O-TASK:
Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va
array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45
*/
const calculateSumOfNumbers = (input: any): number => {
  // create 0 as starting point for numbers
  let a = 0;
  // Check numbers from input given as an argument
  for (const ele of input) {
    if(typeof ele === 'number')
      a+=ele
  }
  // Check if there is a number isnide inputted data
  return a
}

// Test cases
console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35 ,90]))