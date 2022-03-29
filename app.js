addEventListener("DOMContentLoaded", () => {
    const btn_menu = document.querySelector(".btn_menu")
    if (btn_menu) {
        btn_menu.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("show")
        })
    }
})

// addEventListener('DOMContentLoaded', () =>{

//     const btn_menu = document.querySelector('.btn_menu');

//     if(btn_menu){
//         btn_menu.addEventListener('click', () =>{
//             const menu_items = document.querySelector('.menu_items');
//             menu_items.classList.toggle('show');
//         });

//     }
// })

// window.onload = function() {  

//     var btn_menu = document.querySelector('.btn_menu') 

//     if (btn_menu) { 
//         btn_menu.addEventListener('click', () => { 
//             var menu_items = document.querySelector('.menu_items') 
//             menu_items.classList.toggle('show')
//         }) 
//     } 
// }