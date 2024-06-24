/* 
  M-TASK: 
    Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va 
    array ichidagi har bir raqam uchun raqamni ozi va hamda 
    osha raqamni kvadratidan tashkil topgan object hosil qilib, 
    hosil bolgan objectlarni array ichida qaytarsin.
    MASALAN: getSquareNumbers([1, 2, 3]) 
    return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
*/

interface NumberWithSquare {
  number: number;
  square: number;
}

function getSquareNumbers(arr: number[]): NumberWithSquare[] {
  return arr.map(num => ({
      number: num,
      square: num * num
  }));
}

// Example usage:
const result = getSquareNumbers([5, 8, 3, 7]);
console.log(result); 
// Output: [{number: 5, square: 25}, {number: 8, square: 64}, {number: 3, square: 9}, {number: 7, square: 49}]
