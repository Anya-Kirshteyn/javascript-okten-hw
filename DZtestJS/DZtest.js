// const array= [2,17,13,6,22,31,45,66,100,-18]
// let i=0
// while(i<array.length){
//     let array=array[i]
//     console.log(array)
//     i++
// }
//
// const array= [2,17,13,6,22,31,45,66,100,-18]
// let i=0
// while(i<array.length){
//     if(array%2 !== 0){
//         console.log(array[i])
//     }
//     i++
// }

// const array= [2,17,13,6,22,31,45,66,100,-18]
// for(let i=array.length-1;i>=0;i--){
//     if(array[i]%2 ===0){
//         console.log(array[i])
//     }
// }
// function filter(users){
//     let finishedUsers=[]
//     for(let user of users){
//         if(user.id) && (user.age >= 18){
//             finishedUsers.push(user)
//
//         }
//     }
// return finishedUsers
// }
//
// function  minArray(numbers){
//     let min=numbers[0]
//     for (let number of numbers){
//         if( number< min){
//         min=number}
//     }
// return min}
// console.log(minArray([1,2,3,4,5,6,7,8,9,10]))

// function swap(numbers, id1,id2){
//     let temp=id1
//      id1=id2
//      id2=temp
//     return numbers
// }
// console.log(swap([2,4,3,1,5],0,1))
// function sum(numbers){
//     let base=0
//     for( let num of numbers){
//         base+=num
//     }
//     return base
// }
// console.log(sum([2,4,3,1,5]))

// function minNum(numbers){
//     let min=numbers[0]
//     for(let num of numbers){
//         if(num<min){
//             min=num
//         }
//
//     }
//     console.log(min)
//     return min
// }
// minNum([2,4,3,1,5])


// function unload(array){
//     let stack=[]
//     for(let num of array){
//         if(Array.isArray(num)){
//             unload(num)
//             else{
//                 stack.push(num)
//             }
//         }
//     }
// }
// console.log(unload([2,4,3,1,5,[11,12,13,14,15], [222,45,66,77,88,99]]))
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
//
// const fruitCount = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {})
//
//
//
// const fruitCount = fruits.reduce((accumulator, currentValue) => {
//     if (accumulator[currentValue]) {
//         accumulator[currentValue] += 1;
//     } else {
//         accumulator[currentValue] = 1;
//     }
//     return accumulator;
// }, {});
//
// console.log(fruitCount);

// const abc= ['hello world', 'lorem ipsum', 'javascript is cool']
// abc.forEach(str => console.log(str.toUpperCase()))
// let str = '   dirty string'
// console.log(str.trim())

// let str = 'Ревуть воли як ясла повнi'
// console.log(str.split(' '))

//
// – створити функцію sortNums(array,direction), яка приймає масив чисел,
// та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.

//     let nums = [11,21,3];
//
// function sortNums(nums, direction) {
//     if(direction ==='ascending'){
//         nums.sort((a,b)=>a-b)
//     }
// }
//
// sortNums(nums,'ascending') // [3,11,21]
//
// sortNums(nums,'descending') // [21,11,3]


// – є масив 
// — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// – є масив

// let coursesAndDurationArray = [
//
//     {title: 'JavaScript Complex', monthDuration: 5},
//
// {title: 'Java Complex', monthDuration: 6},
//
// {title: 'Python Complex', monthDuration: 6},
//
// {title: 'QA Complex', monthDuration: 4},
//
// {title: 'FullStack', monthDuration: 7},
//
// {title: 'Frontend', monthDuration: 4}
//
// ];

// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

// let filterd=coursesAndDurationArray.filter((course) => {
//     course.monthDuration > 5
// })
// console.log(filterd)
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)

// function User(id,name,surname,email,phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let usr1=new User(5,'dsd','asdas','asda',2323)
// let usr2=new User(6,'dsd','asdas','asda',2323)
// let usr3=new User(1,'dsd','asdas','asda',2323)
// let usr4=new User(2,'dsd','asdas','asda',2323)
// let usr5=new User(3,'dsd','asdas','asda',2323)
// let usr6=new User(4,'dsd','asdas','asda',2323)
// let arrayUsr=[usr1,usr2,usr3,usr4,usr5,usr6]
// console.log(arrayUsr)
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
// let doubleId=arrayUsr.filter(item=>item.id%2 === 0)
// console.log(doubleId)

// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// arrayUsr.sort((a,b)=> a.id-b.id)
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client
//  class Client{
//     constructor(id, name, surname , email, phone, order){
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
//
// let clientArray=[
// new Client(1,'sda','asas','saa@',3232,['milk','potato']),
//  new Client(2,'sda','asas','saa@',3232,['milk','potato']),
//  new Client(3,'sda','asas','saa@',3232,['milk','potato']),
//  new Client(4,'sda','asas','saa@',3232,['milk','potato']),
//  new Client(5,'sda','asas','saa@',3232,['milk','potato']),
//  new Client(6,'sda','asas','saa@',3232,['sos'])
// ]
// console.log(clientArray.sort((a, b) => a.order.length - b.order.length));

// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

// function Car(model,manufacturer,year,maxSpeed,engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive=function (){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
// this.info=function (){
//         console.log(`model-${model},manufacturer-${manufacturer},year${year},maxSpeed${maxSpeed},engineVolume${engineVolume}`)
// }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         maxSpeed = newSpeed
//     };
//     this.changeYear = function (newValue) {
//         if (newValue > year) {
//             year = newValue
//         }
//     }
//     this.addDriver=function (driver){
//         this.driver = driver;
//     }
// }
// const car1 = new Car("Camry", "Toyota", 2022, 220, 2.5);
// car1.increaseMaxSpeed(5)
// car1.info()
// class Car {
//     constructor (model,manufacturer,year,maxSpeed,engineVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         }
//         this.info = function () {
//             console.log(`model-${this.model},manufacturer-${this.manufacturer},year-${this.year},maxSpeed-${this.maxSpeed},engineVolume-${engineVolume}`)
//         }
//
//         this.increaseMaxSpeed = function (newSpeed) {
//             this,maxSpeed = newSpeed
//         };
//         this.changeYear = function (newValue) {
//             if (newValue > year) {
//                 this.year = newValue
//             }
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         }
//     }}
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.

// class Girls{
//     constructor(name,age,footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let allGirls=[
//     new Girls('sonya', 20, 36),
//     new Girls('sonya', 30, 37),
//     new Girls('sonya', 40, 38),
//     new Girls('sonya', 50, 39),
//     new Girls('sonya', 50, 35),
// ]
// class Prince{
//     constructor(name,age,footSizeToFind){
//         this.name = name;
//         this.age = age;
//         this.footSizeToFind = footSizeToFind;
//     }
// }
// let Charming=new Prince("boy",20,35)
// for(let girl of allGirls){
//     if(girl.footSize === Charming.footSizeToFind) console.log(girl);
// }

// Array.prototype.MyForEach = function (callback) {
//    for(let i = 0; i < callback.length; i++) {
//        callback(this[i],i,this)
//    }
// }
// const numbers = [1, 2, 3, 4, 5];
//
// numbers.MyForEach(function(number, index, array) {
//     console.log(`Елемент ${number} має індекс ${index}`);
// });

// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції
// let coursesAndDurationArray = [
//
//     {title: "JavaScript Complex", monthDuration: 5},
//
// {title: "Java Complex", monthDuration: 6},
//
// {title: "Python Complex", monthDuration: 6},
//
// {title: "QA Complex", monthDuration: 4},
//
// {title: "FullStack", monthDuration: 7},
//
// {title: "Frontend", monthDuration: 4}
//
// ];
// let newd=coursesAndDurationArray.map((course,index) => ({...course, id:index++}));
// console.log(newd);

// Array.prototype.myFilter=function (callback) {
//     let arr=[]
//     for(let item of this) {
//         if (callback(item)){
//             arr.push(item)
//         }
//     }
//     return arr;
// }

// Створити функцію, яка робить глибоку копію об’єкта.
//
//     Додати перевірки на undefined, null, NaN.
//
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.


// function deepCopy(obj) {
//     if (obj) {
//         let functions = []
//         for (let key in obj) {
//             if (typeof obj[key] === 'function') {
//                 const funcCopy = obj[key].bind({})
//                 functions.push({funcCopy, key})
//
//             }
//         }
//
//         const objClone = JSON.parse(JSON.stringify(obj))
//         for (const func of functions) {
//             objClone[func.key] = func.funcCopy
//         }
//
//         console.log(objClone)
//         return objClone
//     }
//     throw new Error('obj is not found')
// }


// #8Nmt60ZT
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.
// let div=document.createElement('div')
// div.classList.add("wrap", "collapse", "alpha", "beta")
// div.style.color = "red"
// div.style.background = "blue"
// div.innerHTML ="<h1> sdsdsdsd </h1>"
// document.body.appendChild(div)
//
// let divClone=div.cloneNode(true)
// document.body.appendChild(divClone)

// #OPLI89c9G
//
// – Є масив:
//     ['Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// const arr=['Main',"Products","About us","Contacts"]
// let ul=document.createElement('ul')
// for(let value of arr){
//     let li=document.createElement('li')
//       li.innerText = value
//        ul.appendChild(li)
// }
// document.body.appendChild(ul)

// #jeBqHV525U5
//
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//
//     {title: 'JavaScript Complex', monthDuration: 5},
//
// {title: 'Java Complex', monthDuration: 6},
//
// {title: 'Python Complex', monthDuration: 6},
//
// {title: 'QA Complex', monthDuration: 4},
//
// {title: 'FullStack', monthDuration: 7},
//
// {title: 'Frontend', monthDuration: 4}
// ];

// for(let i = 0; i < coursesAndDurationArray.length; i++) {
//     let div = document.createElement("div");
//     let span = document.createElement("span");
//     span.innerText = coursesAndDurationArray[i].title;
//     let span2 = document.createElement("span");
//     span2.innerText = coursesAndDurationArray[i].monthDuration;
//     div.append(span, span2);
//     document.body.append(div);
// }


// За допомоги скріпта для кожного елементу масиву зробити
// <div class=’item’> ,
// в якому буде <h1 class=’heading’>  з title  елементу,
// та <p class=’description’>
// з monthDuration елементу.
//
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//
//     {title: 'JavaScript Complex', monthDuration: 5},
//
//     {title: 'Java Complex', monthDuration: 6},
//
//     {title: 'Python Complex', monthDuration: 6},
//
//     {title: 'QA Complex', monthDuration: 4},
//
//     {title: 'FullStack', monthDuration: 7},
//
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for(let i = 0; i < coursesAndDurationArray.length; i++) {
//     let div2=document.createElement('div')
//     div2.classList.add('item')
//     let h1=document.createElement('h1')
//     h1.classList.add('heading');
//     h1.innerText=coursesAndDurationArray[i].title;
//
//     let p=document.createElement('p')
//     p.classList.add('description')
//     p.innerText=coursesAndDurationArray[i].monthDuration
//     div2.append(h1,p)
//         document.body.appendChild(div2)
// }


// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// // Створити для кожного елементу масиву свій блок, блок розділити блоками,
// //     в яких будуть зберігатись значення окремих властивостей,
// //     для властивості modules зробити список з елементами
//
// let coursesPage=document.getElementById("courses")
// for(let i = 0; i < coursesArray.length; i++) {
// let course = document.createElement('div')
// coursesPage.appendChild(course)
// ////title////
//     let titleDiv = document.createElement('div')
//     titleDiv.innerText=coursesArray[i].title
//     course.appendChild(titleDiv)
// ////time divs/////
//     let timeDiv = document.createElement('div')
//     timeDiv.id='timeDiv'
//     let monthDurationDiv = document.createElement('div')
//     let hourDurationDiv = document.createElement('div')
//     monthDurationDiv.innerText=`Month Duration: ${coursesArray[i].monthDuration}`
//     hourDurationDiv.innerText= `Hours Duration: ${coursesArray[i].hourDuration}`
//     timeDiv.append(monthDurationDiv, hourDurationDiv)
//     course.appendChild(timeDiv)
//     /////
//
//     //////modules Div////
//     let modulesDiv = document.createElement('div')
//     course.appendChild(modulesDiv)
//     let ul=document.createElement('ul')
//
//     for(let a=0;a<coursesArray[i].modules.length;a++){
//         let li=document.createElement('li')
//         li.innerText=`Module-${coursesArray[i].modules[a]}`
//         ul.appendChild(li)
//         modulesDiv.appendChild(li)
//     }
// }


// #sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
//     зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
// let h1=document.getElementById('text')
// let button=document.getElementById('button')
// button.addEventListener('click', function(){
//     h1.innerText=' '
// })


// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
// let btnAge=document.getElementById('btnAge');
// let inputAge=document.getElementById('age')
//
// btnAge.addEventListener('click', function(){
//     if (inputAge.value >=18 ){
//         alert('User is adult')
//     }
//     else if (inputAge.value <= 18 && inputAge.value >=1){
//         alert('User is minor')
//     }
//     else if(inputAge.value <=0){
//         alert('impossible action')
//     }
// })

<!--Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, -->
<!--та вивести об’єкт в документ.-->
<!--Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом-->
// let form=document.getElementById('form');
// let nameVal=document.getElementById("nameInput");
// let surnameVal=document.getElementById("surnameInput");
// let ageVal=document.getElementById("ageInput");
// let btnForm=document.getElementById("btnForm");
// let divForm=document.getElementById("formDiv");

// form.addEventListener('submit',(ev)=>{
//     ev.preventDefault();
//
// })
// btnForm.addEventListener('click',(ev)=>{
//     let p=document.getElementById('p')
//     p.innerText=`name-${nameVal.value} surname-${surnameVal.value} age-${ageVal.value}`;
//     divForm.appendChild(p)
// })


// є сторінка, на якій є блок, в кому знаходиться цифра.
//   Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let divcount=document.getElementById("countDiv")
//
// let currentNum=localStorage.getItem("key") || 0
// currentNum=Number(currentNum)+1
// localStorage.setItem("key",currentNum)
// divcount.innerText=currentNum


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
//     в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
//     Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
//     Інфу НЕ виводити в консоль, а малювати в DOM
// let currentTime=JSON.parse(localStorage.getItem('time')) || []
// currentTime.push(Date.now())
// localStorage.setItem('time', JSON.stringify(currentTime))


// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
//     При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

// let weightInput=document.getElementById("weightInput");
// let weightDiv=document.getElementById("weightDiv");
// addEventListener("input",()=>{
// weightDiv.innerText=weightInput.value * 2
// })


// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
// function addToLocalStorage(arrayName,objToAdd){
//   let array=JSON.parse(localStorage.getItem(arrayName)) || []
//   array.push(objToAdd)
//     localStorage.setItem(arrayName,JSON.stringify(array))
// }
// addToLocalStorage('users', { name: 'Anya', age: 20 })

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
// let btnTable=document.getElementById('btnTable')
// let table=document.createElement('table');
// table.style.border = '1px solid black'
// btnTable.onclick=()=>{
//
//     let rowsIn=document.getElementById('rowsInput').value
//     let cols=document.getElementById('colsInput').value
//     let content=document.getElementById('contentInput').value
//     let tableDiv=document.getElementById('tableDiv')
//
//     for(let i=0;i<rowsIn;i++){
//         let row=document.createElement("tr");
//         for(let j=0;j<cols;j++){
//             let col=document.createElement("td");
//             col.innerText=content;
//             col.style.border = '1px solid black'
//             row.appendChild(col);
//         }
//         table.appendChild(row);
//     }
//  tableDiv.appendChild(table);
// }


// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

// let divCount=document.getElementById("countDiv");
//
// document.addEventListener('readystatechange', () => {
//     if (document.readyState === "complete"){
//         let curentNum = localStorage.getItem("curentNum") || 100;
//
//     let curentTime = Number(localStorage.getItem("curentTime")) || 0;
//         let now=Date.now();
//     if (now - curentTime > 10000){
//         curentTime=now
//         curentNum=Number(curentNum)+10
//
//         localStorage.setItem("curentNum", curentNum);
//         localStorage.setItem("curentTime", curentTime);
//     }
//         divCount.innerText=JSON.parse(localStorage.getItem("curentNum"));
//     }
// })

// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//     При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

// let array=[]
// for (let i = 1; i < 100; i++) {
//     array.push({id: i, title:i});
// }
//
// let prev=document.getElementById('prev')
// let next=document.getElementById('next')
// let container=document.getElementById('container')
//
// let pageSize=10
// let currentPage=1;
// let totalItems=array.length;
// let totalPages= totalItems/pageSize;
//
// function renderPage(){
//     container.innerHTML='';
//
//
//     const startOfPage=(currentPage-1)*pageSize;
//     const endOfPage=startOfPage+pageSize;
//     const pageContent=array.slice(startOfPage,endOfPage);
//
//     pageContent.forEach(item=>{
//      const div=document.createElement('div');
//      div.innerText=`${item.id}  ${item.title}`;
//      container.appendChild(div);
//     })
//
//     prev.disabled= currentPage===1;
//     next.disabled= currentPage===totalPages;
// }
//
// prev.addEventListener('click',()=>{
//     if(currentPage>1){
//         currentPage--;
//         renderPage();
//     }
// })
//
// next.addEventListener('click',()=>{
//     if(currentPage<totalPages){
//         currentPage++
//         renderPage();
//     }
// })
//
// renderPage();


// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

