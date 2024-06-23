/* 
L-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

*/
const reverseSentence = (str: string): string => {
    const arr = str.split(' ')
    return  arr.map(ele => ele.split('').reverse().join('')).join(' ')
  }

  const result = reverseSentence("Hi my name is Daniel")
  console.log(result);
  