// ==============================================================================================================
console.log("--------------------------------------------------------------");

// 2024-06-07
// MIT 14 TASK H:


// Integerlardan iborat arrayni argument sifatida qabul qiladigan
// function tuzing. Ushbu function faqatgina positive sonlarni olib
// string holatida return qilsin.

// MASALAN: getPositive([1, -4, 2]) return qiladi "12".
// -4 positive emas negative number bo'lganligi uchun
// uni ignore qilib qolganlarini birlashtirib string ko'rinishadi qaytarmoqda


const integerArrays: number[] = [1, -4, 2, 6, -7, 3, 8];

const getPositive = (integerList: number[]): number[] => {
    if (!Array.isArray(integerList)) {
        throw new Error("Parameter must be an array");
    }

    const positiveNumbers: number[] = [];
    for (let i = 0; i < integerList.length; i++) {
        if (integerList[i] > 0) {
            positiveNumbers.push(integerList[i]);
        }
    }
    
    return positiveNumbers;
}

const result = getPositive(integerArrays);
console.log(`Positive numbers: ${result}`);
