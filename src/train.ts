/*
ZH-TASK:
  Shunday function yozing, u berilgan array parametrni ichidagi eng katta 
  raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
  MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]
*/
function findDisappearedNumbers(arr: number[]): number[] {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    const maxNum = Math.max(...arr);
    const result: number[] = [];
    
    // Loop through numbers from 1 to the maximum number in the array
    for (let i = 1; i <= maxNum; i++) {
        // If the number is not in the array, add it to the result
        if (!arr.includes(i)) {
            result.push(i);
        }
    }
    
    return result;
}

// Example usage:
const missingNumbers = findDisappearedNumbers([1, 3, 4, 7]);
console.log(missingNumbers); // Output: [2, 5, 6]
