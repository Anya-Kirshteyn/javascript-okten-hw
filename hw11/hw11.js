// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
//
//
// let divContainer=document.getElementById('container')
//
// fetch('https://dummyjson.com/carts?limit=0')
//     .then(res => res.json())
//     .then((cartsObj)=>{
//
//
//         let {carts} = cartsObj
//        for(let cart of carts){
//
//            let productDiv=document.createElement('div')
//            productDiv.innerText=`id ${cart.id}
//             total=>${cart.total}
//              with discount=> ${cart.discountedTotal}
//
//            user-ID(${cart.userId})
//             total products-->${cart.totalProducts}
//             total quatity is-${cart.totalQuantity}`
//
//            divContainer.append(productDiv)
//
//           let ul= document.createElement('ul')
//            let productsData = document.createElement('div')
//             for(let products of cart.products){
//
//
//                 let li=document.createElement('li')
//                 li.innerText=`id:${products.id},
//                 title-'${products.title}',
//                 price:${products.price}UAH,
//                 quantity:${products.quantity}
//                 total:${products.total},
//                  discount % =${products.discountPercentage}, Total with % =${products.discountedTotal}
//                 `
//                 let img=document.createElement("img")
//                 img.src=products.thumbnail
//                 ul.append(li, img)
//                 productsData.append(ul)
//                 divContainer.append(productsData)
//
//             }
//
//
//        }
//
//
//         }
//     )





// #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((recipesObj)=>{

let divContainer=document.getElementById('container')


let {recipes}=recipesObj;
for(let recipe of recipes){
    console.log(recipe)
    let recipeDiv=document.createElement('div')


    let h4=document.createElement('h4')
    h4.innerText=`name:${recipe.name} 
    id: ${recipe.id} author id:${recipe.userId}
    ratings: \u2605 ${recipe.rating}
    `
    let img=document.createElement('img')
    img.src=recipe.image
    img.style.width='250px'
    img.style.borderRadius=' 20px'


    recipeDiv.append(h4, img)
    divContainer.appendChild(recipeDiv)

let ol=document.createElement('ol')
    ol.innerText='ingredients : '
    for( let product of recipe.ingredients) {
        let li = document.createElement('li')
        li.innerText = `-${product}`
        ol.appendChild(li)
        recipeDiv.appendChild(ol)
    }
    let ul=document.createElement('ul')
    for(let instruction of recipe.instructions){
        let li=document.createElement('li')
        li.innerText=instruction;
        ul.appendChild(li)
        recipeDiv.appendChild(ul)
    }

    let sub=document.createElement('sub')

    sub.innerText=`
        prep Time Minutes:${recipe.prepTimeMinutes},
      cook Time Minutes:${recipe.cookTimeMinutes},
      servings:${recipe.servings},
      difficulty: ${recipe.difficulty},
      cuisine: ${recipe.cuisine},
     caloriesPerServing: ${recipe.caloriesPerServing},
        `
    recipeDiv.appendChild(sub)

    for( let tag of recipe.tags){
    let span=document.createElement('span')
        span.innerText=`#${tag}`
        recipeDiv.appendChild(span)
}
    for (let type of recipe.mealType) {
        let h5 = document.createElement('h5');
        h5.innerText = `${type} 🥣`;


        recipeDiv.appendChild(h5);

    }

}


    });














































