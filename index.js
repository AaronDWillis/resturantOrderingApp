import { menuArray } from "./data.js";
import { menuCard, orderCard } from "./templates.js";

//Element grabbers
const elements = {
    menuContainer: document.getElementById("menu_container"),
    orderContainer: document.getElementById("order_container")
}

// Global event listener
const events = {
    add_btn: (target) => console.log("logged", target),
    order_btn: () => console.log("logged order btn"),
    remove_btn: () => console.log("logged remove btn")
}
document.addEventListener("click", (e) => {
    const event = e.target.dataset.event
    if(!event) return
    events[event]?.(e.target)
})

// Html templates
const menuHtml = menuArray.map(menuCard).join("")
elements.menuContainer.innerHTML = menuHtml
const orderHtml = orderCard
elements.orderContainer.innerHTML = orderHtml