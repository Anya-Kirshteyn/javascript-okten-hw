// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.



// let div= document.createElement('div');
// div.classList.add('wrap','collapse', 'alpha', 'beta');
// div.style.background='lightpink';
// div.innerText='lorem Ipsum';
// div.style.color='darkgreen';
// div.style.fontSize='40px';
//
// let div2=div.cloneNode(true);
// document.body.append(div, div2);



//
// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

//
// let array =['Main','Products','About us','Contacts'];
// let ul=document.createElement('ul');
// for(let arr of array){
//     let li=document.createElement('li');
//     li.innerText=arr;
//     ul.appendChild(li);
// }
// document.body.appendChild(ul);



//
// - Є масив  coursesAndDurationArray
//
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//

//     let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let div = document.createElement('div');
// for (let course of coursesAndDurationArray) {
//    let p=document.createElement('p')
//     p.innerText = course.title + " " + course.monthDuration + "month";
//     div.appendChild(p);
// }
//
// document.body.appendChild(div);
//



// Є масив coursesAndDurationArray
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//     в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//

//
//     let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let course of coursesAndDurationArray) {
//
//     let div = document.createElement('div');
//     div.classList.add('item');
//
//   let h1 =document.createElement("h1");
//   h1.classList.add('heading');
//   h1.innerText = course.title;
//
//   let p = document.createElement("p");
//   p.classList.add('description');
//   p.innerText = course.monthDuration;
//
//   div.append(h1, p);
//     document.body.appendChild(div);
// }






















