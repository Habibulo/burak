/* 
  N-TASK: 
    Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham,
    orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
    MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
*/
function palindromCheck(str: string): boolean {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');
  // Check if the cleaned string is equal to its reverse
  return cleanedStr === reversedStr;
}

// Test cases
console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false
console.log(palindromCheck("A man, a plan, a canal, Panama")); // true
console.log(palindromCheck("racecar")); // true
console.log(palindromCheck("hello")); // false
