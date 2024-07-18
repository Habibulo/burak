/*
 TASK W
    Shunday function yozing, u o'ziga parametr sifatida
    yagona array va number qabul qilsin. Siz tuzgan function
    arrayni numberda berilgan uzunlikda kesib bo'laklarga
    ajratgan holatida qaytarsin.

 MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
 return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti
*/

function chunkArray<T>(array: T[], size: number): T[][] {
   const result: T[][] = [];
   for (let i = 0; i < array.length; i += size) {
     const chunk = array.slice(i, i + size);
     result.push(chunk);
   }
   return result;
 }
  
 // Test qilish uchun:
 console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
 // Kutilayotgan natija: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
 