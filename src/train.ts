/*
ZI-TASK:
  Shunday function yozing, u function ishga tushgandan 
  3 soniyadan keyin "Hello World" ni qaytarsin.
  MASALAN: delayHelloWorld("Hello World") return "Hello World"
*/
function delayHelloWorld(message: string): Promise<string> {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(message);
      }, 3000);
  });
}

// Funksiyani chaqirish va natijani olish
delayHelloWorld("Hello World").then((result) => {
  console.log(result);  // 3 soniyadan keyin "Hello World" ni chiqaradi
});
