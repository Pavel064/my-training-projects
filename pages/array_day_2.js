function ArrayDayTwo() {
  const array = [1, 2, 3, 4, 5, 6, 7]

  //
  //
  //
  //
  // array.concat()
  // возвращает новый массив, состоящий из массива, на котором он был вызван,
  // соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

  // const copy = array.concat() // делаем копию массива
  // console.log('copy', copy) // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]
  // array.push(8) // изменяем первый массив и видим, что копия не мутирует
  // console.log('array', array) // Array(7) [ 1, 2, 3, 4, 5, 6, 7, 8 ]

  const next = [8, 9]
  const next2 = [10, 11]
  // console.log(array.concat(next, next2)) // объединяем два массива Array(11) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
  // console.log([0].concat(array, next, next2)) // Array(12) [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

  //   function concat(arr, sub = []) {
  //     const copy = []
  //     const totalLength = arr.length + sub.length

  //     for (let i = 0; i < totalLength; i++) {
  //       if (i < arr.length) {
  //         copy[i] = arr[i]
  //       } else {
  //         copy[i] = sub[i - arr.length]
  //       }
  //     }

  //     return copy
  //   }

  //   console.log(concat(array)) // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]
  //   console.log(concat(array, next)) // Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  //
  //
  //
  //
  // array.reverse()
  // на месте обращает порядок следования элементов массива.
  // Первый элемент массива становится последним, а последний — первым.

  // console.log(array.concat().reverse()) // Array(7) [ 7, 6, 5, 4, 3, 2, 1 ]
  // console.log(array) // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]

  // function reverse(arr) {
  //   const copy = arr.concat()
  //   for (let i = 0; i < arr.length; i++) {
  //     arr[i] = copy[arr.length - 1 - i]
  //     // 0 -> 7 - 1 - 0 = 6 индекс (в нулевой элемент складываем шестой индекс)
  //     // 1 -> 7 - 1 - 1 = 5 индекс
  //     // 2 -> 7 - 1 - 2 = 4 индекс
  //     // 3 -> 7 - 1 - 3 = 3 индекс
  //     // 4 -> 7 - 1 - 4 = 2 индекс
  //     // 5 -> 7 - 1 - 5 = 1 индекс
  //     // 6 -> 7 - 1 - 6 = 0 индекс
  //   }

  //   return arr
  // }

  // console.log(reverse(array))
  // console.log(array)

  //
  //
  //
  //
  // array.fill()
  // заполняет все элементы массива от начального до конечного индексов одним значением.
  //

  // console.log(array.fill('42', 2, 4)) // Array(7) [ 1, 2, "42", "42", 5, 6, 7 ]
  // console.log(new Array(5).fill(''))

  // function fill(arr, start, end) {}
  // домашка

  // // =========
  // function toHTML(_, index) {
  //   const tag = `h${index + 1}`
  //   return `<${tag}>This is text ${tag}</${tag}>`
  // }

  // const template = new Array(6).fill('').map(toHTML).join('')
  // console.log(template)

  // document.body.innerHTML = template

  //
  //
  //
  //
  // array.includes()
  // определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
  //

  // function includes(arr, search, start = 0) {
  //   // for (let i = start; i < arr.length; i++) {
  //   //   if (arr[i] === search) {
  //   //     return true
  //   //   }
  //   // }
  //   // return false

  //   return arr.indexOf(search, start) > 0 ? true : false
  // }

  // console.group('Native')
  // console.log(array.includes(3))
  // console.log(array.includes(3, 3))
  // console.log(array.includes(8))
  // console.groupEnd()

  // console.group('Own Impl')
  // console.log(includes(array, 3))
  // console.log(includes(array, 3, 3))
  // console.log(includes(array, 8))
  // console.groupEnd()

  //
  //
  //
  //
  // array.filter()
  // создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

  function log(args) {
    console.log(args)
  }

  // log(array.filter((item, index, arr) => item % 2 === 0)) // Array(3) [ 2, 4, 6 ]
  // log(array.filter((item, index, arr) => item % 2)) // Array(4) [ 1, 3, 5, 7 ]

  // const filtered = array
  //   .filter((item) => item % 2)
  //   // 3 % 2 => return 1 (true)
  //   // 4 % 2 => return 0 (false)
  //   .filter((item) => item >= 3)
  //   .map((item) => item ** 2)
  //   .filter((item) => item > 10)

  // log(filtered)

  // const values = [42, 1, null, undefined, 'a', 0, 1, 42, 'Pavel', false, true, '', NaN]

  // log(values.filter((item) => item)) // Array(7) [ 42, 1, "a", 1, 42, "Pavel", true ]

  // const text = `Привет, я мат1 так рад тебя видеть, мат2 как дaвно тебя небыло видно. Ты мат2 какая красивая. Мат2 я рад`

  // const restricted = ['мат1', 'мат2']

  // function clear(word) {
  //   return !restricted.includes(word.toLowerCase())
  // }

  // const clean = text.split(' ').filter(clear).join(' ')

  // log(clean) // Привет, я так рад тебя видеть, как дaвно тебя небыло видно. Ты какая красивая. я рад

  // function filter(arr, callback) {
  //   const result = []

  //   for (let i = 0; i < arr.length; i++) {
  //     if (callback(arr[i], i, arr)) {
  //       result.push(arr[i])
  //     }
  //   }
  //   return result
  // }

  // const clean = filter(text.split(' '), clear).join(' ')

  // log(clean) // Привет, я так рад тебя видеть, как дaвно тебя небыло видно. Ты какая красивая. я рад

  //
  //
  //
  //
  // array.every() & array.some()
  // Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
  // Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

  // function every(arr, fn) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!fn(arr[i])) return false
  //   }
  //   return true
  // }

  // function some(arr, fn) {
  //   // домашка
  // }

  // console.groupCollapsed('Native')
  // log(array.some((i) => i % 2)) // true (являются ли некоторые элементы в массиве нечётными?)
  // log(array.some((i) => i % 2 === 0)) // true (являются ли некоторые элементы массива чётными?)
  // log(array.some((i) => typeof i === 'string')) // false (являются ли некоторые элементы массива строкой?)
  // log(array.every((i) => i % 2)) // false (является ли каждый элемент нечётным?)
  // log(array.every((i) => typeof i === 'number')) // true (является ли все элементы массива типом number?)
  // console.groupEnd()

  // console.group('Own Impl')
  // log(some(array, (i) => i % 2))
  // log(some(array, (i) => typeof i === 'string'))
  // log(every(array, (i) => i % 2))
  // log(every(array, (i) => typeof i === 'number'))
  // console.groupEnd()

  //
  //
  //
  //
  // array.sort()
  // на месте сортирует элементы массива и возвращает отсортированный массив.
  // Сортировка не обязательно устойчива. Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.

  // const start = 'a'.charCodeAt()
  // const end = 'z'.charCodeAt()

  // Array.prototype.shuffle = function () {
  //   let currentIndex = this.length,
  //     randomIndex

  //   while (currentIndex != 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex)
  //     currentIndex--
  //     ;[this[currentIndex], this[randomIndex]] = [this[randomIndex], this[currentIndex]]
  //   }

  //   return this
  // }
  // const letters = new Array(end - start + 1)
  //   .fill('')
  //   .map((_, index) => String.fromCharCode(start + index))
  //   .shuffle()
  //   .sort()

  // console.log(letters) // выводит алфавит
  // console.log(shuffle(letters)) // выводит алфавит
  // console.log(letters.sort()) // возвращает буквы в правильную последовательность

  // const numbers = new Array(20).fill('').map((_, index) => index + 1) // создаём массив с числами

  // shuffle(numbers) // перемешиваем числа в массиве

  // console.log(numbers) // Array(20) [ 18, 6, 20, 5, 1, 4, 9, 7, 10, 15, … ]
  // console.log(numbers.sort((a, b) => a - b)) // Array(20) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, … ]
  // console.log(numbers.sort((a, b) => b - a)) // Array(20) [ 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, … ]

  // console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle()) // Array(9) [ 4, 2, 1, 3, 8, 6, 7, 9, 5 ]

  //
  //
  //
  //
  // array.reduce()
  // применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

  // function reduceFn(acc, item) {
  //   console.log('acc', acc)
  //   return acc + item
  // }

  // const result = array.reduce(reduceFn, 0)

  // console.log(result) // 28

  // const result = array.reduce((acc, item) => acc + item, 0)

  // console.log(result) // 28

  // const result = array.reduce((acc, item) => acc * item, 1)
  // console.log(result) // 5040

  // const result2 = array.reduce((acc, item) => {
  //   acc.push(item * item)
  //   return acc
  // }, [])

  // console.log(result2) // Array(7) [ 1, 4, 9, 16, 25, 36, 49 ]

  // const cart = [
  //   { title: 'Apple', price: 49 },
  //   { title: 'banana', price: 149 },
  // ]

  // const total = cart.reduce((sum, item) => {
  //   return sum + item.price
  // }, 0)
  // console.log(total) // 198

  //
  //
  //
  //
  // array.flat()
  // возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.

  // const array2 = [1, 2, 3, [4], [[5], [6]], [[[[[7]]]]]]

  // console.log(array2.flat(Infinity))
}

export default ArrayDayTwo
