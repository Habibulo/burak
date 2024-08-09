/*
 TASK ZG
   String sifatida berilgan string parametrni
   snake case'ga o'tkazib beradigan function yozing.
   MASALAN: convertToSnakeCase('name should be a string')
   return 'name_should_be_a_string'
*/
function convertToSnakeCase(input: string): string {
  // Trim the input string to remove leading and trailing whitespace
  const trimmedInput = input.trim();
  // Replace spaces with underscores and convert the string to lowercase
  const snakeCaseString = trimmedInput.replace(/\s+/g, '_').toLowerCase();
  return snakeCaseString;
}
// Example usage:
const result = convertToSnakeCase('name should be a string');
console.log(result); // Output: 'name_should_be_a_string'
