// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


// document.onreadystatechange = function callback () {
//     if (document.readyState === "complete") {
//         let div = document.getElementById("loxotron");
//         let count = localStorage.getItem("count") || 100;
//         count = parseInt(count);
//         div.innerText = `${count} ${'UAH'}`;
//
//
//         setTimeout(function () {
//             count=count + 10;
//             localStorage.setItem("count", JSON.stringify(count));
//         }, 10000)
//
//
//
//     }
//
// }
// ###-#################################################################################################

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
// <div id="block"></div>
// <button id="prev"> prev </button>
// <button id="next"> next </button>

let container=document.getElementById("block");
let prevBtn=document.getElementById("prev");
let nextBtn=document.getElementById("next");
let data=[]
for(let i=1; i <= 100 ; i++){
    data.push({index: i, name:`object${i}`})
}
let start=0;
let end=10;
function render(){
    container.innerHTML='';

    for(let i=start; i < end ;i++){
        if(data[i]){
       let div= document.createElement('div')
        div.innerText=`${data[i].name} index-${data[i].index}`;
       container.appendChild(div);
    }}

}
nextBtn.onclick=()=>{
    if(end < data.length){
        start+=10
        end+=10
        render();
    }

}

prevBtn.onclick=()=>{
    if(start > 0){
        start-=10
        end-=10
        render();
    }

}











// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
//     зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let h1=document.getElementById('text')
// let button=document.getElementById('button')
// button.onclick=function () {
//     h1.innerText=null;
// }
// ==============================================================================================================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let ageInput = document.getElementById("userAge");
// let button = document.getElementById("ageButton");
// let userMsg=document.getElementById("message");
// button.addEventListener("click", function(){
//
//    if( ageInput.value !== ""){
//        if(ageInput.value >= 18){
//            userMsg.innerText= 'valid age'
//        }
//        if(ageInput.value < 18){
//            userMsg.innerText= 'invalid age'
//        }
//
//    }
//    if(!ageInput.value){
//        userMsg.innerText= 'no age'
//
//     }
// })
// ===============================================================================================
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// let inputs=document.getElementsByClassName('inputs')
// let button=document.getElementById('button')
// let result=document.getElementById ('resultDiv')
// let form=document.getElementById('form')
//
// form.onsubmit = function(ev){
//     ev.preventDefault()
//     let resultText=''
//   for(let input of inputs){
//       resultText += input.value + ' '
//   }
//     result.innerHTML = resultText
//
// }
// result.onmousemove = function(ev){
//     let r=ev.clientY;
//     let g=ev.clientX;
//     let b=ev.clientY;
//     this.style.background=`rgb(${r},${g},${b})`
//     this.style.color='purple'
// }
// ===========================================================================================
<!--============================================================================================-->

<!--є сторінка, на якій є блок, я кому знаходиьтся цифра. -->
<!--написати код, який при кожному перезавантажені сторінки буде додавати до неї +1-->
// let div=document.getElementById("onePlus");
//
// let count=localStorage.getItem('key') || 0;
// count=Number(count)+1;
// localStorage.setItem('key',count);
// div.innerHTML=count;
// =====================================================================
// Є сторінка index.html (назва довільна),
// при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
//     Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
//     Інфу НЕ виводити в консоль, а малювати в DOM
// let sessionsList=JSON.parse(localStorage.getItem("sessionsList")) || [];
// sessionsList.push(new Date());
// localStorage.setItem("sessionsList",JSON.stringify(sessionsList));
//
// ======================================================================-=======================
// створити конвертор ваги з кг в фунти.
// ---данні заповнюються через інпут.
//--- При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок


// let result=document.getElementById("result");
// let input = document.getElementById("input");
// input.style.width = '250px'
// input.addEventListener("input", function(){
//     result.innerText = input.value * 2.2;
//
// })

// ===============================================================================
//
// В localStorage зберігаються масиви.
//     -Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
//   - сигнатура функції - addToLocalStorage(arrayName:string,objToAdd:any{}):void


// function addToLocalStorage(arrayName,objToAdd){
//     const arraysName=localStorage.getItem(arrayName);
//     if(!arraysName){
//         document.write('name does not exist');
//     }
//     let arraysParse=JSON.parse(arraysName);
//
//     if(typeof objToAdd === 'object'){
//         arraysParse.push(objToAdd);
//     }
// localStorage.setItem(arrayName, JSON.stringify(objToAdd));
// }
//
// addToLocalStorage('name','Ann65');

// =========================================================================
// Створити 3 інпута та кнопку.
// -- Один визначає кількість рядків,
// -- другий - кількість ячеєк,
// -- третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.


// let button=document.getElementById('submit')
// button.addEventListener('click', function(){
// let rows=+document.getElementById('rows').value
// let columns=+document.getElementById('columns').value
// let content=document.getElementById('content').value
//
// let result=document.getElementById('resultDiv')
//     result.innerHTML= '';
//
// let table=document.createElement('table');
//
// for(let i=0;i<rows;i++){
//     let tr=document.createElement('tr');
//
// for(let j=0;j<columns;j++){
//     let td=document.createElement('td');
//      td.innerText=content
//     tr.appendChild(td);
// }
// table.appendChild(tr);
// }
// result.appendChild(table);
// })
// ===========================================================================================================

