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



// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// ===================
// // const Suits=[ 'spade', 'diamond','heart', 'clubs'];
// // const  value= ['6','7','8','9','10','jack','queen','king','ace'];
// // const color={ spade: 'black', clubs: 'black', diamond: 'red', heart: 'red' };
// // const deck=[]
// //
// // suits.forEach(suit=>{
// //     value.forEach()
// // })
// ====================
// const suits = ['spade', 'diamond', 'heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
// const colors = { spade: 'black', clubs: 'black', diamond: 'red', heart: 'red' };
// const deck = [];
// for (let i = 0; i < suits.length; i++) {
//     for (let j = 0; j < values.length; j++) {
//         deck.push({
//             cardSuit: suits[i],
//             value: values[j],
//             color: colors[suits[i]]
//         });
//     }
// }
// console.log(deck);


//
// - знайти піковий туз


//  const acespade=deck.find(ace => ace.value === 'spade' && ace.value === 'ace');
// console.log(acespade);

// - всі шістки

//
// const sixmix=deck.filter(deck => deck.value === '6');
// console.log(sixmix);


// - всі червоні карти

// - всі буби
// - всі трефи від 9 та більше

// const redCards=deck.filter(card => card.color === 'red');
// console.log(redCards);
//
// const diamondcards=deck.filter(card => card.cardSuit === 'diamond');
// console.log(diamondcards);

// - всі трефи від 9 та більше
//
// const clubsstreet = deck.filter(card =>
//     card.cardSuit === 'clubs' &&
//     (card.value === '9' || card.value === '10' ||
//         card.value === 'jack' || card.value === 'queen' ||
//         card.value === 'king' || card.value === 'ace')
// );
// console.log(clubsstreet);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт



// const suits = ['spade', 'diamond', 'heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
// const colors = { spade: 'black', clubs: 'black', diamond: 'red', heart: 'red' };
// const deck = [];
// for (let i = 0; i < suits.length; i++) {
//     for (let j = 0; j < values.length; j++) {
//         deck.push({
//             cardSuit: suits[i],
//             value: values[j],
//             color: colors[suits[i]]
//         });
//     }
// }
// const suitsDeck = deck.reduce((acc, card) => {
//     if (!acc[card.cardSuit]) {
//         acc[card.cardSuit] = [];
//     }
//     acc[card.cardSuit].push(card);
//     return acc;
// }, { spade: [], diamond: [], heart: [], clubs: [] });
//
// console.log(suitsDeck);
// написати пошук всіх об'єктів, в яких в modules є sass
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
const sas=coursesArray.filter(item => item.modules.includes('sass') );
console.log(sas);

const docker=coursesArray.filter(item => item.modules.includes('docker') );
console.log(docker);