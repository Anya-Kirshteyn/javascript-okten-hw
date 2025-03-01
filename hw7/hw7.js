//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
// const arrUsers=[];
// arrUsers.push(new User(1,'ss','sa', 'ss@mail',+972))
// arrUsers.push(new User(2,'sgfs','sda', 'vbs@mail',+9572))
// arrUsers.push(new User(3,'sd','sa', 'ads@mail',+9721))
// arrUsers.push(new User(4,'kks','sa', 'ks@mail',+97223))
// arrUsers.push(new User(5,'hh','sha', 'hs@mail',+97322))
// arrUsers.push(new User(6,'rrs','rr', 'sr@mail',+9732))
// arrUsers.push(new User(7,'gg','sa', 'ggs@mail',+9722))
// arrUsers.push(new User(8,'ddd','da', 'dds@mail',+9723))
// arrUsers.push(new User(9,'aa','sa', 'aaa@mail',+9722))
// arrUsers.push(new User(10,'ww','sa', 'sww@mail',+9721))

// console.log(arrUsers);


// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filtr=arrUsers.filter(user=>user.id % 2 === 0);
// console.log(filtr);

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortedUsers=arrUsers.sort((a,b)=>a.id - b.id)
// console.log(sortedUsers)


// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function Client(id,name,surname,email,phone,order){
//     User.call(this, id,name,surname,email,phone);
//     this.order=order;
// }
// const clients = [
//     new Client(1, 'Анна', 'Иванова', 'anna@example.com', '+380971234567', ['Laptop', 'Mouse']),
//     new Client(2, 'Олег', 'Петров', 'oleg@example.com', '+380976543210', ['Phone']),
//     new Client(3, 'Мария', 'Сидорова', 'maria@example.com', '+380965432109', ['Tablet', 'Keyboard', 'Headphones']),
//     new Client(4, 'Иван', 'Коваленко', 'ivan@example.com', '+380954321098', ['TV']),
//     new Client(5, 'Татьяна', 'Лебедева', 'tatiana@example.com', '+380943210987', ['Monitor', 'USB Hub']),
//     new Client(6, 'Алексей', 'Морозов', 'alex@example.com', '+380932109876', ['Printer']),
//     new Client(7, 'Юлия', 'Григорьева', 'yulia@example.com', '+380921098765', ['SSD', 'RAM']),
//     new Client(8, 'Сергей', 'Бондаренко', 'sergey@example.com', '+380910987654', ['Smartwatch']),
//     new Client(9, 'Екатерина', 'Семенова', 'ekaterina@example.com', '+380909876543', ['Game Console', 'Controller']),
//     new Client(10, 'Николай', 'Кузнецов', 'nikolay@example.com', '+380898765432', ['Router'])
// ];

// ///////gpt написал новых клиентов......//////////////
// console.log(clients);


// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(clients.sort((a,b)=> a.order.length - b.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car







// function Car(model, manufacturer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive= function(){
//      console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
//
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== "function") {
//                 console.log(`${key} - ${this[key]}`);
//             }
//         }
//     };
//     this.newSpeed = function(addSpeed) {
//         this.maxSpeed = this.maxSpeed+addSpeed;
//     }
//     this.renewYear= function(renewYear) {
//         if (renewYear > this.year) {this.year = renewYear;}
//         else (console.log('time machine not found'))
//     }
//     this.addDriver = function (driverObg) {
//         this.driver = driverObg;
//     };
//
// }


// const myCar = new Car("Model S", "Tesla", 2022, 250, 2.0);

// myCar.drive();
// myCar.info();

//
// myCar.newSpeed(30);
// myCar.drive();


// myCar.renewYear(2025);
// myCar.info();


// myCar.addDriver({ name: "Олексій", age: 30, experience: "10 років" });
//
// myCar.info();
// console.log(myCar.driver);



// class Car{
//     constructor(model, manufacturer, year, maxSpeed, engineVolume){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive= function(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
//
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== "function") {
//                 console.log(`${key} - ${this[key]}`);
//             }
//         }
//     };
//     this.newSpeed = function(addSpeed) {
//         this.maxSpeed = this.maxSpeed+addSpeed;
//     }
//     this.renewYear= function(renewYear) {
//         if (renewYear > this.year) {this.year = renewYear;}
//         else (console.log('time machine not found'))
//     }
//     this.addDriver = function (driverObg) {
//         this.driver = driverObg;
//     };
//
// }}
//
// const myCar = new Car("Model S", "Tesla", 2022, 250, 2.0)
// myCar.info();
//



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//  class Cinderella{
//     constructor(name,age,footsize){
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
//  }
//
// class Creep{
//     constructor(name,age,intertest){
//         this.name = name;
//         this.age = age;
//         this.intertest = intertest;
//     }
// }
//
// const Cinderellas=[
//     new Cinderella('girl',18,38),
//     new Cinderella('giarl',18,39),
//     new Cinderella('gisdrl',18,48),
//     new Cinderella('girlsd',18,38),
//     new Cinderella('girl',18,34),
//     new Cinderella('giaarl',18,38),
//     new Cinderella('gidrl',18,38),
//     new Cinderella('theItgirl',27,37),
//     new Cinderella('girl',18,38),
//     new Cinderella('giddrl',18,38),
//
// ]
// const prince=new Creep('prince',27,37)

// for (girl of Cinderellas){
//     if (girl.footsize === prince.intertest){
//         console.log(girl.name);
//     }
// }

// const serch=Cinderellas.find(girl => girl.footsize === prince.intertest)
// console.log(serch)

//
// *Через Array.prototype. створити власний foreach, filter

//
//
// Array.prototype.myForEach = function (callback) {
//     for (const item of this) {
//         callback(item);
//     }
// };
//
// [11, 22, 33].myForEach((x) => console.log(x));

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// coursesAndDurationArray.sort((a,b)=>a.month-b.month);
// console.log(coursesAndDurationArray.sort((a,b)=>a.monthDuration-b.monthDuration));
// const more=coursesAndDurationArray.filter(item=>item.monthDuration>5)
// console.log(more);

//
//
// Array.prototype.myway=function (callback){
//     let arr=[]
//     for(let item of this){
//         if(callback(item)){
//             arr.push(item)
//         }
//     }
//     return arr;
// }
//
// const users = [
//     { name: "Alice", age: 25, status: "true" },
//     { name: "Bob", age: 30, status: "false" },
//     { name: "Charlie", age: 22, status: "true" },
//     { name: "David", age: 28, status: "true" },
//     { name: "Eve", age: 35, status: "false" },
//     { name: "Frank", age: 40, status: "true" },
//     { name: "Grace", age: 27, status: "false" },
//     { name: "Hank", age: 32, status: "true" },
//     { name: "Ivy", age: 29, status: "true" },
//     { name: "Jack", age: 24, status: "true" }
// ];
//
// const results=users.myway((user)=>user.name.length > 4)
// console.log(results);
//
//









