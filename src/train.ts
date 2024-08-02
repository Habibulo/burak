/*
  ZD-TASK:
    Shunday function yozing, uni number, array va number parametrlari bolsin va 
    berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi 
    raqam bilan almashtirib yangilangan arrayni qaytarsin.
    MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]
*/

function changeNumberInArray(
  targetNumber: number, 
  arr: number[], 
  newNumber: number
): number[] {
  // Find the index of the target number in the array
  const index = arr.indexOf(targetNumber);

  // If the target number is found in the array
  if (index !== -1) {
    // Replace the number at the found index with the new number
    arr[index] = newNumber;
  }

  // Return the updated array
  return arr;
}

// Example usage:
const result = changeNumberInArray(1, [1, 3, 7, 2], 2);
console.log(result); // Output: [1, 2, 7, 2]
