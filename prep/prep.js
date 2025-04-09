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

// Задание: Напиши функцию sortStudents(arr, direction)
//
// direction === 'asc' — отсортируй студентов по возрасту по возрастанию
//
// direction === 'desc' — по убыванию
//
// let students = [
//     {name: 'Anna', age: 23},
//     {name: 'Ivan', age: 20},
//     {name: 'Maria', age: 25},
//     {name: 'Oleh', age: 22}]
//
// sortStudents=(arr, direction)=>{
//     if(direction === 'asc'){
//     console.log(arr.sort((a, b)=>a.age-b.age))
//      }
//     else if(direction === 'desc'){
//         console.log(arr.sort((a, b)=>b.age-a.age))
//     }
// }
//
// sortStudents(students, 'asc')



// Задание: Сгенерируй все возможные пары, где имя1 ≠ имя2
// Alice - Bob
// Alice - Charlie
// Bob - Alice
// let names = ['Alice', 'Bob', 'Charlie', 'Diana'];
// for( let i=0; i<names.length; i++){
//     for(let j=i+1;j< names.length; j++){
//         console.log(`${names[i]}-${names[j]}`)
//     }
// }

// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// function Client(id, name, surname , email, phone, order){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone= +phone
//     this.order=order
// }
// let client1=new Client(1,'sasy','ivanov', 'aa@msil.com','04044040',['grece','soci'])
//
// console.log(client1)


// - Є масив
// Завдання робити через цикли
// - для кожного елементу масиву зробити <div class='item'> ,
// -в якому буде <h1 class='heading'>  з title  елементу,
// -та <p class='description'> з monthDuration елементу.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for(let course of coursesAndDurationArray){
//     let div=document.createElement('div')
//     div.classList.add('item')
//     let h1=document.createElement('h1')
//     h1.classList.add('heading')
//     h1.innerText=`${course.title}`
//     let p=document.createElement('p')
//     p.classList.add('description')
//     p.innerText=`${course.monthDuration}`
//     div.append(h1,p)
//     document.body.appendChild(div)
//
//
// }

// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// let data=[]
// for(let i=0;i<100;i++){
//     data.push(`object # ${i}`)
// }
// let container=document.getElementById('container')
// let prevBtn=document.getElementById('prev')
// let nextBth=document.getElementById('next')
// let start=0
// let end=10
//
// render=()=>{
//     container.innerHTML='';
//     for(let i=start; i<end;i++){
//         let div=document.createElement('div')
//         div.innerText=data[i]
//         container.appendChild(div)
//     }
// }
//
// prevBtn.onclick=function (){
//     if (start>0){
//         start-=10;
//         end-=10;
//         render()
//     }
// }
//
// nextBth.onclick=function (){
//     if (end<data.length){
//         end+=10;
//         start+=10
//         render()
//     }
// }
//
// let data=[];
// for(let i=1;i<=100;i++){
//     data.push(`obj # ${i}`)
// }
// let container=document.getElementById('container')
// let nextBtn=document.getElementById('next')
// let prevBth=document.getElementById('prev')
// let start=0
// let end=10
//
//
//
// function render(){
//     container.innerHTML=''
//     for(let i=start;i<end;i++){
//
//         let p=document.createElement('p')
//         p.innerText=data[i]
//         container.append(p)
//
//     }
// }
// prevBth.onclick=function (){
//     if (start>0){
//         start-=10
//         end-=10
//         render()
//     }
// }
// nextBtn.onclick=function (){
//     if (end<data.length){
//         end+=10
//         start+=10
//         render()
//     }
// }










