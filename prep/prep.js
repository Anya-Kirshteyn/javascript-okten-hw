// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr=[];
// for(let i=1; i <11; i++){
//     arr.push(i)
//
// }

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// function Book (title ,pageCount, genre){
//     this.title="title-1"
//     this.pageCount='50'
//     this.genre='romans'
// }
// let book1= new Book('title-2',)

// - Створити 3 об'єкти які описують книги. Поля об'єкту
//     : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// function Book(title ,pageCount, genre, authors)
// let titles=[1,2,3]
// let pageCounts=[50, 100, 150]
// let genres=['horror', 'romance']
// let authors=[
//     [{name:'asy'},{name:'gorge'}],
//     [{name:'bob'},{name:'stasy'}],
//     [{name: 'dod'},{name: 'vlad'}]
//     ]
// let book=[]
//
// for( let i=0; i< titles.length; i++){
// book.push({
//     title: titles[i],
//     pages: pageCounts[i],
//     genres: genres[i],
//     authors: authors[i]
// })
// }
// console.log(book)

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
//
//  function exchange (sumUAH,currencyValues,exchangeCurrency){
//     for(let value of currencyValues) {
//         if (value.currency === 'USD') {
//       console.log(sumUAH/value.value)
//         }
//         if (value.currency === 'EUR') {
//             console.log(sumUAH/value.value)
//         }
//
//     }
// }
//
// exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
//     for (let cv of currencyValues){
//         if( exchangeCurrency === cv.currency){
//            console.log( sumUAH/ cv.value)
//             break
//         }
//         else {
//             throw new Error('we didnt code that')
//         }
//     }
// }
//
// exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')


// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
// let cardSuit={clubs:'black',spade:'black', heart: 'red',diamond:'red'}
// // let colors=
// let values=[6,7,8,9,10,'jack','queen','king','ace']
// let stack=[]
//
// for(let suit in cardSuit ){
//     for (let value of values){
//         stack.push({
//             values: value,
//             cardSuit: suit,
//             color:cardSuit[suit]
//         })
//     }
// }
//
// console.log(stack)



// Вывести в консоль таблицу умножения от 1 до 10.
// for( let i=1; i<= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         let sum = i*j;
//         console.log(`${i}*${j}=${sum}`)
//     }
// }

// Создай массив всех возможных комбинаций:
// let fruits = ["apple", "banana"];
// let colors = ["red", "green"];
//     ["red apple", "green apple", "red banana", "green banana"]
//
// let fruits = ["apple", "banana"];
// let colors = ["red", "green"];
// let tgt=[]
// for(let i=0; i < fruits.length; i++){
//     for(let j=0; j < colors.length; j++) {
//         tgt.push(`${fruits[i]} ${colors[j]}`)
//     }
// }
// console.log(tgt)

// // Создай колоду карт, перебрав масти и значения:
// let suits = ['hearts', 'diamonds', 'spades', 'clubs'];
// let values = [6,7,8,9,10,'jack','queen','king','ace'];
// let dec=[]
// for( let v of values){
//     for(let i=0;i<suits.length; i++){
//         dec.push({
//             value:v,
//             suit:suits[i]
//         })
//     }
// }
// console.log(dec)


//     Найди все пары чисел от 1 до 5, при которых первое число не равно второму.
//     Выведи каждую такую пару в консоль.
// 1 2
// 1 3
// ...
// 4 5
// 5 1
// ...
// let array=[1,2,3,4,5]
// for(let a of array){
//     for(let b of array){
//         if( a !== b){
//             console.log(a,b)
//         }
//     }
// }

// Попроси пользователя ввести ширину и высоту прямоугольника, а потом нарисуй его в консоли:
//
//  function tabl(rows, columns){
//     for(let i=0;i<rows;i++){
//         let lin=''
//         for(let j=0; j < columns;j++){
//             lin +='*'
//         }
//         console.log(lin)
//     }
//  }
//
// tabl(2,3)

//не  решено
// Сделай массив всех возможных комбинаций букв по 1 из каждого массива:
//
// let letters1 = ['a', 'b'];
// let letters2 = ['x', 'y', 'z'];
// for( let let1 of letters1){
//
// }



//
// 🔁 3. Все пары чисел, сумма которых равна 10
// Найди и выведи все пары чисел от 1 до 10, у которых сумма = 10
// Пример:
// let arr=[1,2,3,4,5,6,7,8,9]
// for(let i=0; i< arr.length; i++){
//     for(let j=0;j< arr.length; j++){
//         let sum=arr[i]+arr[j]
//         if(sum%10 === 0){
//         console.log(`${arr[i]}+${arr[j]}=${sum}`)}
//     }
// }


//
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// //
// let len=['hello world', 'lorem ipsum', 'javascript is cool']
// for(let i=0; i< len.length; i++){
//     console.log(len[i].length)
// }


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
// let str = 'Ревуть воли як ясла повні';
// stringToarray=(str)=> {
//     const arr = str.split(' ')
//     console.log(arr)
// }
// stringToarray(str)



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//
//
//    let bar=[10,8,-7,55,987,-1011,0,1050,0]
// let b=bar.map(b=>b+'')
// console.log(b)

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];nums[i]>nums[i+1]
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3]
// sortNums=(nums, direction)=>{
//     if( direction === 'ascending'){
//         console.log(nums.sort((a, b)=>a-b))
//     }
//     else if( direction === 'descending'){
//         console.log(nums.sort((a, b)=>b-a))
//     }
//     else{
//     console.log('try again')
//     }
// }
// sortNums(nums,'ascending')





