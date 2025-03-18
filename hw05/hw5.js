
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//
// const upright=(a, b) => a*b;
// console.log(upright(11,22));


// створити функцію яка обчислює та повертає площу кола з радіусом r
// const circle=(radius)=>Math.PI*radius*radius;

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// const cylinder=(radius, height)=>2*3.14*radius*(radius+height)
// console.log(cylinder(10,15))

// створити функцію яка приймає масив та виводить кожен його елемент

// const printer = (array) => {
//     array.forEach(element => console.log(element));
// };
// printer([1, 22, 33, 42]);



// / створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

// const writeParagraph=(text)=>{
//
//     document.write(`
//         <p>
//         ${text}
//         </p>`
//     )
//
// }
// writeParagraph('Hello World!')


// створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий

// const triLi=textLi=>{document.write(
//     `
//          <ul>
//        <li>${textLi}</li>
//        <li>${textLi}</li>
//        <li>${textLi}</li>
//
//        </ul>
//
//     `)
// }
// triLi("sobaka")




// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

//  const somename=(textLi, print)=>{
//      document.write("<ul>")
//
//      for (let i = 0; i < print; i++) {
//          document.write(`<li>${textLi}</li>`);
//      }
//
//      document.write("</ul>")
//
//  }
// somename('gusi', 5);


// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write

// const createList=array=>{
//     document.write("<ul>")
//     array.forEach(element => {
//         document.write(`<li>${element}</li>`)
//     })
//
//     document.write("</ul>")
//
// }
// createList([12, true, 'pompa',13, 31])



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,' +
// ' та виводить їх в документ. Для кожного об'єкту окремий блок.

// const usercount=users=>{
//     users.forEach(user=>{
//         document.write(
//             `
//         <div>
//         <p>${user.id}</p>
//         <p>${user.name}</p>
//         <p>${user.age}</p>
//        </div>`)})
// }
//
//
//
//
// const usersArray = [
//     { id: 1, name: "Анна", age: 25 },
//     { id: 2, name: "Иван", age: 30 },
//     { id: 3, name: "Олег", age: 22 }
// ];
// usercount(usersArray);




// - створити функцію яка повертає найменьше число з масиву

//
// const minValue=numbers=>{
//     let min=numbers[0];
//     numbers.forEach(number=>{
//         if(number<min){
//             min=number;
//         }
//     })
//     return min;
// }
// console.log(minValue([80,50,38,4,5,6]));






// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13


// const sum=arrays=>{
//     let suma = 0;
//     arrays.forEach(array=>{
//         suma=suma+array;
//     })
//     return suma;
// }
// console.log(sum([1,2,10]));





// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// const swap=(arr, index1, index2)=>{
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     return arr;
//
// }
// console.log(swap([11, 22, 33, 44], 0, 1));



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     for(let cheker of currencyValues){
//         if(cheker.currency === exchangeCurrency){
//             return sumUAH/cheker.value;
//         }
//     }
//     return 'currency not found';
// }
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
//
// const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (let cheker of currencyValues) {
//         if (cheker.currency === exchangeCurrency) {
//             return sumUAH / cheker.value;
//         }
//     }
//     return 'currency not found';
// };
//
// console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD')); // 400
// const str = "Hello";
// const newStr = str.substring(0, 0) + "a" + str.substring(1);
// console.log(newStr);