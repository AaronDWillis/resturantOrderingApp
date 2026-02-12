import { menuArray } from "./data.js";
import { itemCard, menuCard, orderCard } from "./templates.js";

let orderArr = []

//Element grabbers
const elements = {
    menuContainer: document.getElementById("menu_container"),
    orderContainer: document.getElementById("order_container")
}

// Global event listener
const events = {
    add_btn: (target) => addToCard(Number(target.dataset.id)), // passes object id into function
    order_btn: () => console.log("logged order btn"),
    remove_btn: () => console.log("logged remove btn")
}
document.addEventListener("click", (e) => {
    const event = e.target.dataset.event
    if(!event) return
    events[event]?.(e.target)
})

// Html handler
const addToCard = id => {
        const item = menuArray.find(item => item.id === id) // find item
        orderArr.unshift(item) // add item
        elements.orderContainer.innerHTML = orderCard(orderArr.map(itemCard).join("")) // update html
}
elements.menuContainer.innerHTML = menuArray.map(menuCard).join("")