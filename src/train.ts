// ==============================================================================================================
console.log("--------------------------------------------------------------");

// 2024-06-08
// MIT 14
// 39th Lesson TASK H2

// String argument pass bo'ladigan function tuzing.
// Ushbu function argument tarkibidagi digit(son)larni topib
// yangi stringda return qilsin

// MASALAN: getDigits("m14i1t"); return qiladi "141"
// Yuqoridagi misolda, berilayotgan parametr tarkibida ham harf ham son mavjud.
// Natija sifatida text tarkibidagi sonlarni aniqlab ularni string ko'rinishida qaytarmoqdamiz.


function getDigits(str: string){
    const arr  = str.split ("");
    return arr.filter(value => value >= '0' && value <= '9').join('');
    
}

console.log(getDigits("s4dfdsdfsdg54665s4dsfga5dfg46sd5ag4"));