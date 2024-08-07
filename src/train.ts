/*
ZF-TASK:
  Shunday function yozing, uni string parametri bolsin. 
  String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin 
  lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
  MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'
*/
function capitalizeWords(input: string): string {
  // Split the input string into an array of words
  const words = input.split(' ');

  // Iterate over each word and capitalize if it's longer than 2 letters
  const capitalizedWords = words.map((word) => {
      if (word.length > 2) {
          // Capitalize the first letter and append the rest of the word
          return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
          // Keep the word as is if it's 1 or 2 letters long
          return word;
      }
  });

  // Join the processed words back into a single string
  return capitalizedWords.join(' ');
}

// Test the function
const result = capitalizeWords('name should be a string');
console.log(result); // Output: 'Name Should be a String'

