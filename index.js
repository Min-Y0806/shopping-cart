let carts = document.querySelectorAll(".add-cart");


function onLoadCartNumbers() {
    let cartNumbers = localStorage.getItem("cartNumbers");
    if (cartNumbers) {
        document.querySelector("#sc span").textContent = cartNumbers

    }
}

onLoadCartNumbers()
// database
const products = [{
        brand: "nike",
        name: "Nike A11",
        price: 2000,
        incart: 0
    },
    {
        brand: "puma",
        name: "Puma A12",
        price: 1000,
        incart: 0
    },
    {
        brand: "adidas",
        name: "Adidas A13",
        price: 2500,
        incart: 0
    },
    {
        brand: "nike",
        name: "Nike A14",
        price: 3000,
        incart: 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function cartNumbers(product) {
    let cartNumbers = localStorage.getItem("cartNumbers");
    let productNumbers = parseInt(cartNumbers);
    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector("#sc span").textContent = productNumbers + 1
    } else {
        localStorage.setItem("cartNumbers", 1)
        document.querySelector("#sc span").textContent = 1;
    }
    setItems(product)

}

function setItems(product) {
    let cartItems = localStorage.getItem("productInCart")
    cartItems = JSON.parse(cartItems)


    if (cartItems !== null) {
        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].incart += 1
    } else {
        cartItems = {
            [product.name]: product
        }
        product.incart = 1;
    }
    localStorage.setItem("productInCart", JSON.stringify(cartItems))
}

function totalCost(product) {
    let totalPrice = localStorage.getItem("totalCost");
    if (totalPrice === null) {
        totalPrice = product.price
    } else {
        totalPrice = parseInt(product.price) + parseInt(totalPrice)
    }
    localStorage.setItem("totalCost", totalPrice)
}