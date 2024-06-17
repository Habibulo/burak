// ==============================================================================================================
console.log("--------------------------------------------------------------");

// 2024-06-08
// MIT 14
// 44th Lesson J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
function findLongestWord(str: string): string {
    let words: string[] = str.split(' ');
    let longestWord: string = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("I come from Uzbekistan"));
