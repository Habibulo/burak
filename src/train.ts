/*
  V-TASK:

   Shunday function yozing, uni string parametri bolsin va stringdagi harf 
   va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
   MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1} 
*/
function countChars(str: string) {
  let obj: any = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}

console.log(countChars("Khabibullo"));
