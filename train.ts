// 2024-06-04
// 35th Lesson
// MIT 14 TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning taribidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.
// ==============================================================================================================
console.log("--------------------------------------------------------------");

const randomNumbers: number[] = [5, 21, 12, 21, 8];

const getHighestIndex = (sonlarList: number[]): number => {
  if (!Array.isArray(sonlarList)) {
    throw new Error("Parameter must be an array");
  }

  // Initialize maxIndex to 0 and maxValue to the first element
  let maxIndex: number = 0;
  let maxValue: number = sonlarList[0];

  // Iterate through the array to find the index of the first maximum value
  for (let i = 1; i < sonlarList.length; i++) {
    if (sonlarList[i] > maxValue) {
      maxValue = sonlarList[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};

const result: number = getHighestIndex(randomNumbers);
console.log("Arrayning tarkibidagi birinchi eng katta qiymatning indeksi:", result);
