export const menuCard = food =>
   `<section class=" flex">
        <div class="card_container flex">
            <!-- Menu icon -->
            <div class="card_start">
                <p class="card_icon">${food.emoji}</p>
            </div>
            
            <!-- Menu title and description -->
            <div class="card_middle">
                <h4 class="card_title">${food.name}</h4>
                <p class="card_description">${food.ingredients}</p>
                <p class="price">£${food.price}</p>
            </div>

            <!-- Menu increment button -->
            <div class="card_end">
                <button data-event="add_btn" data-id="${food.id}" class="card_btn align_right">+</button>
            </div>
        </div>
    </section>`

export const orderCard = (totalPrice, itemsHtml) =>`
    <section>
        <h3 class="order_header">Your order</h3>
        <div id="item_list" class="item_list">
            <!-- Items appear in this container -->
            ${itemsHtml}
        </div>

        <!-- Total price -->
        <div class="total_price flex">
            <h4>Total:</h4>
            <p class="price">£${totalPrice}</p>
        </div>

        <!-- Complete order button -->
        <div class="flex">
            <button data-event="order_btn" id="order_btn" class="order_btn">Complete order</button>
        </div>
    </section>`

export const itemCard = item => `
        <div class="order_item flex">
            <h4>${item.name}</h4>
            <p class="qty" data-event="add_btn" data-id="${item.id}">Add</p>
            <p class="qty" data-event="remove_btn" data-id="${item.id}">Remove</p>
            <p class="qty">Qty: ${item.qty}<p>
            <p class="align_right price item_price">£${item.price*item.qty}</p>
        </div>`