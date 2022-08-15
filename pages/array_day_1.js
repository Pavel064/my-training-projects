import Head from 'next/head'

export default function ArrayDayOne() {
  // array.push()
  // Добавляет эл-нт в конец массива

  const array = [1, 1, 2, 3, 5, 8, 13]

  // // const res = array.push(21)
  // // console.log(res) //8
  // // console.log(array) //Array(8) [ 1, 1, 2, 3, 5, 8, 13, 21 ]

  // function push(arr, num) {
  //   arr[arr.length] = num
  //   return arr.length
  // }
  // const res = push(array, 21)
  //
  //
  //
  //
  //

  //array.pop()
  // Удаляет последний эл-нт из массива
  // и возвращает его значение

  // function pop(arr) {
  //   const lastItem = arr[arr.length - 1]
  //   arr.length -= 1
  //   return lastItem
  // }

  // const res = array.pop()
  // const res = pop(array)
  // console.log(array) // Array(6) [ 1, 1, 2, 3, 5, 8 ]
  // console.log(res) // 13
  //
  //
  //
  //

  // array.shift()
  // Удаляет первый эл-нт из массива
  // и возвращает его значение
  // Этот метод изменяет длину массива

  // const res = array.shift()
  // function shift(arr) {
  //   const firstItem = arr[0]
  //   for (let i = 0; i < arr.length; i++) {
  //     arr[i] = arr[i + 1]
  //   }

  //   arr.length -= 1

  //   return firstItem
  // }
  // // const res = shift(array)

  // console.log(res) // 1
  // console.log(array) // Array(6) [ 1, 2, 3, 5, 8, 13 ]
  //
  //
  //
  //

  // array.unshift()
  // Добавляет один или более эл-нтов в начало массива
  // и возвращает новую длину массива

  // function unshift(arr, number) {
  //   // const merged = [number, ...arr]
  //   const merged = [number].concat(arr)

  //   for (let i = 0; i < merged.length; i++) {
  //     arr[i] = merged[i]
  //   }

  //   return arr.length
  // }

  // const newLength = unshift(array, 42)

  // // const newLength = array.unshift(42)

  // console.log(newLength) // 8
  // console.log(array) // Array(8) [ 42, 1, 1, 2, 3, 5, 8, 13 ]
  //
  //
  //
  //

  // array.slice()
  // Возвращает новый массив, содержащий копию
  // части исходного массива

  // const res = array.slice(2)
  // const res2 = array.slice(2, 4)

  // function slice(arr, start, end = arr.length) {
  // function slice(arr, start, end) {
  //   const result = []
  //   let lastIndex = end ? end : arr.length
  //   if (end < 0) {
  //     lastIndex = arr.length
  //     lastIndex -= Math.abs(end)
  //   }

  //   for (let i = start; i < lastIndex; i++) {
  //     result.push(arr[i])
  //   }

  //   return result
  // }

  // const res = slice(array, 2)
  // const res2 = slice(array, 2, 4)
  // const res3 = slice(array, 2, -4)

  // console.log('res', res) // res Array(5) [ 2, 3, 5, 8, 13 ]
  // console.log('res2', res2) // res2 Array [ 2, 3 ]
  // console.log('res3', res3) // res3 Array [ 2 ]
  // console.log(array) // res Array(5) [ 2, 3, 5, 8, 13 ]

  // array.splice()
  // Изменяет содержимое массива, удаляя существующие
  // элементы и/или добавляя новые

  // console.log(array.concat().splice(2)) // Array(5) [ 2, 3, 5, 8, 13 ]
  // console.log(array.concat().splice(2, 2)) // Array [ 2, 3 ]
  // console.log(array.splice(2, 2, 'a', 'b', 'c')) // Array [ 2, 3 ]
  // console.log(array) // Array(5) [ 1, 1, 5, 8, 13 ]

  //
  //
  //
  //
  // array.forEach()
  // Выполняет указанную функцию один раз для каждого
  // элемента в массиве.

  // function iterator(item, index, arr) {
  //   console.log(`item: ${item}, index: ${index}`)
  // }
  // array.forEach(iterator)

  // array.forEach(function (item, index) {
  //   console.log(`item: ${item}, index: ${index}`)
  // })

  // array.forEach((item, index) => {
  //   console.log(`item: ${item}, index: ${index}`)
  // })

  // array.forEach((item) => console.log(`item: ${item}`))

  // function forEach(arr, callbackFn) {
  //   for (let i = 0; i < arr.length; i++) {
  //     callbackFn(arr[i], i, arr)
  //   }
  // }

  // forEach(array, function (item, index, arr) {
  //   console.log(`item: ${item}, index: ${index}`)
  // })
  //
  //
  //
  //
  // array.map()
  // Создаёт новый массив с результатом вызова указанной функции
  // для каждого элемента массива.

  // function map(arr, callbackFn) {
  //   const result = []

  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(callbackFn(arr[i], i, arr))
  //   }

  //   return result
  // }

  // // const newArray = array.map((item) => item ** 2)
  // const newArray = map(array, (item) => item ** 2)

  // console.log(newArray) // Array(7) [ 1, 1, 4, 9, 25, 64, 169 ]
  //
  //
  //
  //
  // array.find()
  // Возвращает значение первого найденного в массиве элемента,
  // которое удовлетворяет условию переданному в callback функции.
  // В противном случае возвращается undefined.

  // function find(arr, callback) {
  //   for (let i = 0; i < arr.length; i++) {
  //     const doesExists = callback(arr[i])
  //     if (doesExists) {
  //       return arr[i]
  //     }
  //   }
  // }

  // // const res = array.find((item) => item === 8)

  // const people = [
  //   { name: 'Pavel', age: 30 },
  //   { name: 'Maria', age: 28 },
  // ]

  // const res = find(people, (person) => person.name === 'Maria')
  // // const res = find(array, (item) => item === 8)

  // console.log(res) // 8
  //
  //
  //
  //
  // array.findIndex()
  // Возвращает индекс в массиве, если элемент
  // удовлетворяет условию проверяющей функции.
  // В противном случае возвращается -1.

  const res = array.findIndex((item) => item === 8)

  console.log(res) // 5 это индекс числа 8

  return (
    <div>
      <Head>
        <title>Push</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Hello</p>
    </div>
  )
}
