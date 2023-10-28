let menu_items = [
    {
        "food": "Masala dosa",
        "cost": 50
    },

    {
        "food": "Chaat", 
        "cost": 60
    },

    {
        "food": "Dal makhani", 
        "cost": 100
    },

    {
        "food": "Stuffed paratha", 
        "cost": 150
    },

    {
        "food": "Kung Pao Chicken", 
        "cost": 50
    },

    {
        "food": "Chow Mein", 
        "cost": 60
    },

    {
        "food": "Chinese Hot Pot", 
        "cost": 100
    },

    {
        "food": "Mapo Tofu", 
        "cost": 150
    },

    {
        "food": "Pizza", 
        "cost": 50
    },

    {
        "food": "Pasta", 
        "cost": 50
    },

    {
        "food": "Arancini", 
        "cost": 100
    },

    {
        "food": "Focaccia", 
        "cost": 150
    },

    {
        "food": "Chicken in coconut soup", 
        "cost": 50
    },

    {
        "food": "Red curry", 
        "cost": 60
    },

    {
        "food": "Thai-style fried noodles", 
        "cost": 100
    },

    {
        "food": "Fried rice", 
        "cost": 150
    },
]


// Cart count increasing and total bill logic

var cart_items_cnt = document.getElementById("cart_items_cnt");

var bill = document.getElementById("bill");


if(localStorage.getItem("cart_items_cnt") != null){
    cart_items_cnt.innerHTML = localStorage.getItem("cart_items_cnt");
}

if(localStorage.getItem("bill") != null)
    bill.innerHTML = localStorage.getItem("bill");


function addCard(card_ind){

    let cnt = localStorage.getItem("cart_items_cnt");
    localStorage.setItem("cart_items_cnt", ++cnt);
    cart_items_cnt.innerHTML = localStorage.getItem("cart_items_cnt");
    
    
    let cost = menu_items[card_ind].cost;
    let prev_cost = localStorage.getItem("bill");
    localStorage.setItem("bill", Number(prev_cost) + cost);
    bill.innerHTML = localStorage.getItem("bill");
    
}

// const total_bill = localStorage.getItem("bill");
const total_bill = 45;
// export total_bill