/*
 Y-TASK:

 Shunday function yozing, uni 2 ta array parapetri bolsin.
 Function ikkala arrayda ham ishtirok etgan 
 qiymatlarni bir arrayda qaytarsin
 MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]
*/
function findIntersection<T>(array1: T[], array2: T[]): T[] {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  
  // Find the intersection of both sets
  const intersection = Array.from(set1).filter(item => set2.has(item));
  
  return intersection;
}

// Example usage
const result = findIntersection([1, 2, 3], [3, 2, 0]);
console.log(result); // Output: [2, 3]
