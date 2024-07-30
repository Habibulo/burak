/*
  TASK ZC
    Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
    Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

    MASALAN: celsiusToFahrenheit(0) return 32;
    MASALAN: celsiusToFahrenheit(10) return 50;

    Yuqoridagi misolda, 0°C, 32°F'ga teng.
    Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

    °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.
*/
function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9 / 5) + 32;
}

// Example usage:
console.log(celsiusToFahrenheit(0)); // Output: 32
console.log(celsiusToFahrenheit(10)); // Output: 50
