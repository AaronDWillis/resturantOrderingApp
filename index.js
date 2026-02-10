import { menuArray } from "./data.js";

//Element grabbers
const menuContainer = document.getElementById("menu_container")

// Food menu template
const menuHtml = menuArray.map(food =>
    `<section class="card_container flex">
        <!-- Menu icon -->
        <div class="card_start">
            <p class="card_icon">${food.emoji}</p>
        </div>
        
        <!-- Menu title and description -->
        <div class="card_middle">
            <h4 class="card_title">${food.name}</h4>
            <p class="card_description">${food.ingredients}</p>
            <p class="card_price">${food.price}</p>
        </div>

        <!-- Menu increment button -->
        <div class="card_end">
            <button id="${food.id}" class="card_btn">+</button>
        </div>
        </section>`
).join("")
menuContainer.innerHTML = menuHtml

// Global event listener
menuContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("card_btn")){
        console.log("logged", e.target.id)
    }
})
