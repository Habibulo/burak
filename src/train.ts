// ==============================================================================================================
console.log("--------------------------------------------------------------");
// 2024-06-15
// MIT 14
// TASK I:

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 4, 3, 4];
const majorityElement = (numbers: number[]) => {
    const countMap = new Map<number, number>();
    for (let num of numbers) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    let maxCount = 0;
    let majorityElement = 0;

    for (let [num, count] of countMap) {
        if (count > maxCount) {
            maxCount = count;
            majorityElement = num;
        }
    }

    return majorityElement;
};

const result = majorityElement(arrayOfNumbers);
console.log("result:", result);

