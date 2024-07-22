/*
  X-TASK:

  Shunday function yozing, uni object va string parapetrlari bolsin. 
  Function string parametri object ichida necha marotaba takrorlanganligini
  qaytarsin (nested object bolsa ham sanasin)
  MASALAN: 
      countOccurrences(
        {model: 'Bugatti', 
         steer: {model: 'HANKOOK', size: 34}}, 
         'model')
        return 2
*/
const countOccurrences = (obj: Record<string, any>, str: string): number => {
  let keys = 0;

  const traverse = (obj: Record<string, any>) => {
    for (let key in obj) {
      if (key === str) keys++;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        traverse(obj[key]);
      }
    }
  };

  traverse(obj);
  return keys;
};

console.log(
  countOccurrences(
    {
      model: "Bugatti",
      steer: { model: "HANKOOK", size: 30, type: { model: "34" } },
    },
    "model"
  )
);
