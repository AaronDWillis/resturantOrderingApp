import { menuArr } from "./data.js";
import { itemCard, menuCard, orderCard } from "./templates.js";

let orderArr = []

//Element grabbers
const elements = {
    menuContainer: document.getElementById("menu_container"),
    orderContainer: document.getElementById("order_container"),
    formContainer: document.getElementById("form_container"),
    form: document.getElementById("form")
}

// Global event listener
const events = {
    add_btn: target => updateCart(Number(target.dataset.id), 1),
    remove_btn: target => updateCart(Number(target.dataset.id), -1),
    order_btn: () => elements.formContainer.style.display = "inline"
}
const hideForm = (target, eventName) => 
    !elements.formContainer.contains(target) && eventName !== "order_btn"
 
document.addEventListener("click", e => {
    const event = e.target.dataset.event
    events[event]?.(e.target)
    if (hideForm(e.target, event)){
        elements.formContainer.style.display = "none"
    }
})

//Form submit event listener
elements.form.addEventListener("submit", () => console.log("submitted"))

// Html handler
const findItem = id => 
    orderArr.find(item => item.id === id)

const renderCart = () => {
    const itemsHtml = orderArr.map(itemCard).join("") // update html
    const totalPrice = orderArr.reduce((sum, item) => sum + item.price * item.qty, 0) 
    if (itemsHtml === )
    elements.orderContainer.innerHTML = orderCard(totalPrice, itemsHtml)
}

const updateCart = (id, quantity) => {
    const existingItem = findItem(id)
    if (existingItem){
        existingItem.qty += quantity
        if (existingItem.qty <= 0){
            orderArr = orderArr.filter(item => item.id !== id)
            elements.orderContainer.innerHTML = null
            return
        }
    } else if (quantity > 0){
        const menuItem = menuArr.find(item => item.id === id)
        orderArr.unshift({...menuItem, qty: 1})
    }
    renderCart()
}

elements.menuContainer.innerHTML = menuArr.map(menuCard).join("")