/* R-TASK:

Shunday function yozing, u string parametrga ega bolsin. 
String "1+2" holatda pass qilinganda string ichidagi 
sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;
*/
function calculate(expression: string): number {
    const numbers: string[] = expression.split('+');
    const numericValues: number[] = numbers.map(num => parseInt(num.trim(), 10));
    const sum: number = numericValues.reduce((acc, curr) => acc + curr, 0);
    return sum;
}
// Example usage:
console.log(calculate("1+3")); // Output: 4
console.log(calculate("10+15+515+15+1+5+7")); // Output: 568
console.log(calculate("100")); // Output: 100 (If there's only one number, it returns itself)
