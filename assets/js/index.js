/* 1. Написать функцию, которая проверяет, являются ли два слова анаграммами. (Анаграммы - слова, которые имеют одинаковую длину и состоят из одних и тех же букв, но в разном порядке. Пример: "воз", "зов")
    Регистр букв не имеет значения. 
    checkAnagram('рига', 'игра') // true
    checkAnagram('aab', 'abb') // false 
*/
function checkAnagram(firstString, secondString) {
  arrayStr1 = firstString.toLowerCase().split('').sort();
  arrayStr2 = secondString.toLowerCase().split('').sort();
  return arrayStr1.length === arrayStr2.length && arrayStr1.every((symbol, index) => arrayStr2[index] === symbol);

}
/* 2. Написать функцию, которая подсчитывает количество гласных в строке. */

function countVowels(str) {
  const vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я', 'a', 'e', 'i', 'o', 'u', 'y'];
  symbols = str.toLowerCase().split('');
  let quantity = null;
  for (const symbol of symbols) {
    vowels.includes(symbol) ? quantity++ : quantity;
  }
  return quantity
}


/* 3. Написать функцию, которая принимает массив с числами и возвращает новый массив, который содержит
отрицательные числа из первого массива. */

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function createArray(count) {
  if (typeof count !== 'number') {
    throw new TypeError();
  }
  if (count <= 0) {
    throw new RangeError();
  }
  const arr = new Array();
  for (let i = 0; i < count; i++) {
    arr[i] = getRandom(-10, 10);
  }
  return arr;
}
array = createArray(10);
array1 = createArray(10);

const getNegativeNumbers = (arr) => arr.filter((element) => element < 0);


/* 4. Написать функцию, которая принимает массив и возвращает новый массив, состоящий только из
уникальных значений первого массива (значения не должны повторяться). */

function getUniqueNumbers(arr1, arr2) {
  if (!(arr1 instanceof Array && arr2 instanceof Array)) {
    throw new TypeError();
  }
  const newArray = new Array();
  for (const number of arr1) {
    if (!arr2.includes(number)) {
      newArray.push(number);
    }
  }
  return newArray
}