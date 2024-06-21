// ==============================================================================================================
console.log("--------------------------------------------------------------");
// 2024-06-21
// MIT 14
// TASK K:

// Berilayotgan parametr tarkibida nechta unli harf bor
// ekanligini aniqlovchi function tuzing

// MASALAN: countVowels("string"); return 1

// Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
// bo'lganligi uchun '1'ni qaytarmoqda


function countVowels(input: string): number {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (const char of input) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

//  Misol
const result = countVowels("string");
console.log(result);  //1