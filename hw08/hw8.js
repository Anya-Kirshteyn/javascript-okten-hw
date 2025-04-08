// Створити функцію, яка робить глибоку копію об'єкту JSON.
//
// -1)Додати перевірки на undefined, null, NaN.
//
//     -2)Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,' +
// -3)'які в нього були до цього моменту.
function cloner(obj){
    if(obj){
        let functions=[]
        for (let key in obj){
            if(typeof obj[key] === 'function'){
                const functionClone = obj[key].bind({});
                functions.push({functionClone, key})
            }
        }
        const cloneObg=JSON.parse(JSON.stringify(obj))
        for (let func of functions){

            cloneObg[func.key] = func.functionClone;
        }
        // console.log(cloneObg)
        return cloneObg
    }
    throw new Error('10101010')
}
const clone=cloner({id:123,name:"John", greeting(){console.log("Greeting")}, beliberda(){console.log("Beliberda")}})

console.log(clone)

//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const fod=coursesAndDurationArray.map((course,index) => ({...course, id:index+1}))
//
//





















