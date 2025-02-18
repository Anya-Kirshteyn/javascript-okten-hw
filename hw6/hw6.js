// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// const a='hello world';
// const b='lorem ipsum';
// const c='javascript is cool';
// const strings=[a,b,c];
// for(const string of strings){
//     console.log(string.length);
// }
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// const a='HELLO WORLD';
// const b='LOREM IPSUM';
// const c='JAVASCRIPT IS COOL';
// const abc=[a,b,c]
// const lowerCase=abc.map(item=>item.toLowerCase());
// console.log(lowerCase);
//
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

//     let str = ' dirty string   '
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// const stringToArray = item => item.split(' ');
//
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str);
//
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

//  const num=[10,8,-7,55,987,-1011,0,1050,0]
// const fix=num.map(i => i+'')
// console.log(fix)

// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// const sortNums=(array,direction)=>{
//     if(direction==='ascending'){
//         return array.sort((a,b)=>a-b);
//     }
//     if(direction==='descending'){
//         return array.sort((a,b)=>b-a);
//     }
// }
// console.log(sortNums([1,2,3,4],'descending'));



// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================

    //
    // let coursesAndDurationArray = [
    // {title: 'JavaScript Complex', monthDuration: 5},
    // {title: 'Java Complex', monthDuration: 6},
    // {title: 'Python Complex', monthDuration: 6},
    // {title: 'QA Complex', monthDuration: 4},
    // {title: 'FullStack', monthDuration: 7},
    // {title: 'Frontend', monthDuration: 4}]

//     const LmonthDuration=coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration)
// console.log(LmonthDuration)

//
// const Fivemonth=coursesAndDurationArray.filter(x =>x.monthDuration>=5)
// console.log(Fivemonth)

//
// const idAdd = coursesAndDurationArray.map((course, index) => ({
//     id:index+1,
//     title:course.title,
//     monthDuration:course.monthDuration,}
// )
// );
// console.log(idAdd)



описати колоду карт (від 6 до туза без джокерів)
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше

{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king'
    color:'', // 'red','black'