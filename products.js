$( document ).ready(function() {

var smallFry = {
    name: "Small Fry",
    price: 0.99,
    catagory: "Fry"
};

var mediumFry = {
    name: "Medium Fry",
    price: 1.49,
    catagory: "Fry"
};

var largeFry = {
    name: "Large Fry",
    price: 1.99,
    catagory: "Fry"
};

var smallDrink = {
    name: "Small Drink",
    price: 0.79,
    catagory: "Drink"
};

var mediumDrink = {
    name: "Medium Drink",
    price: 1.04,
    catagory: "Drink"
};

var largeDrink = {
    name: "Large Drink",
    price: 1.29,
    catagory: "Drink"
};

var hamburger = {
    name: "Hamburger",
    price: 3.99,
    catagory: "Burger"
};

var cheeseBurger = {
    name: "Cheeseburger",
    price: 4.99,
    catagory: "Burger"
};

var hamburgerMeal = {
    name: "Hamburger Meal",
    price: 6.02,
    catagory: "Meal"
};

var cheeseBurgerMeal = {
    name: "Cheeseburger Meal",
    price: 7.02,
    catagory: "Meal"
};

var milkshake = {
    name: "Milkshake",
    price: 1.49,
    catagory: "Dessert"
};

var chocolateChipCookie = {
    name: "Chocolate Chip Cookie",
    price: 0.99,
    catagory: "Dessert"
};

var items = [smallFry, mediumFry, largeFry, smallDrink, mediumDrink,
             largeDrink, hamburger, cheeseBurger, hamburgerMeal,
             cheeseBurgerMeal, milkshake, chocolateChipCookie];

var shoppingCart = [];

items.forEach(item => {
    if(item.catagory === "Fry") {
        $("#fry-list").append("<li>" + item.name + " ($" + item.price + ")</li>");
        $("#fry-add-buttons").append("<button id="+(item.name).split(' ').join('') + "-button> Click to Add to Order");
    }
    if(item.catagory === "Burger") {
        $("#burger-list").append("<li>" + item.name + "</li>");
        $("#burger-add-buttons").append("<button id="+(item.name).split(' ').join('') + "-button> Click to Add to Order");
    }
    if(item.catagory === "Drink") {
        $("#drink-list").append("<li>" + item.name + "</li>");
        $("#drink-add-buttons").append("<button id="+(item.name).split(' ').join('') + "-button> Click to Add to Order");
    }
    if(item.catagory === "Meal") {
        $("#meal-list").append("<li>" + item.name + "</li>");
        $("#meal-add-buttons").append("<button id="+(item.name).split(' ').join('') + "-button> Click to Add to Order");
    }
    if(item.catagory === "Dessert") {
        $("#dessert-list").append("<li>" + item.name + "</li>");
        $("#dessert-add-buttons").append("<button id="+(item.name).split(' ').join('') + "-button> Click to Add to Order");
    }
});

$("#SmallFry-button").click(function() { 
    shoppingCart.push(smallFry);
    alert("A " + smallFry.name + " has been added to your order!");
    AddToOrder(smallFry);
    Total(shoppingCart);
});

$("#MediumFry-button").click(function() { 
    shoppingCart.push(mediumFry)
    alert("A " + mediumFry.name + " has been added to your order!")
    AddToOrder(mediumFry);
    Total(shoppingCart);
});

$("#LargeFry-button").click(function() { 
    shoppingCart.push(largeFry)
    alert("A " + largeFry.name + " has been added to your order!")
    AddToOrder(largeFry);
    Total(shoppingCart);
});

$("#Hamburger-button").click(function() { 
    shoppingCart.push(hamburger)
    alert("A " + hamburger.name + " has been added to your order!")
    AddToOrder(hamburger);
    Total(shoppingCart);
});

$("#Cheeseburger-button").click(function() { 
    shoppingCart.push(cheeseBurger)
    alert("A " + cheeseBurger.name + " has been added to your order!")
    AddToOrder(cheeseBurger);
    Total(shoppingCart);
});

$("#SmallDrink-button").click(function() { 
    shoppingCart.push(smallDrink)
    alert("A " + smallDrink.name + " has been added to your order!")
    AddToOrder(smallDrink);
    Total(shoppingCart);
});

$("#MediumDrink-button").click(function() { 
    shoppingCart.push(mediumDrink)
    alert("A " + mediumDrink.name + " has been added to your order!")
    AddToOrder(mediumDrink);
    Total(shoppingCart);
});

$("#LargeDrink-button").click(function() { 
    shoppingCart.push(largeDrink)
    alert("A " + largeDrink.name + " has been added to your order!")
    AddToOrder(largeDrink);
    Total(shoppingCart);
});

$("#HamburgerMeal-button").click(function() { 
    shoppingCart.push(hamburgerMeal)
    alert("A " + hamburgerMeal.name + " has been added to your order!")
    AddToOrder(hamburgerMeal);
    Total(shoppingCart);
});

$("#CheeseburgerMeal-button").click(function() { 
    shoppingCart.push(cheeseBurgerMeal)
    alert("A " + cheeseBurgerMeal.name + " has been added to your order!")
    AddToOrder(cheeseBurgerMeal);
    Total(shoppingCart);
});

$("#Milkshake-button").click(function() { 
    shoppingCart.push(milkshake)
    alert("A " + milkshake.name + " has been added to your order!")
    AddToOrder(milkshake);
    Total(shoppingCart);
});

$("#ChocolateChipCookie-button").click(function() { 
    shoppingCart.push(chocolateChipCookie)
    alert("A " + chocolateChipCookie.name + " has been added to your order!")
    AddToOrder(chocolateChipCookie);
    Total(shoppingCart);
});

$("#checkout").click(function() { 
    var total = 0;
    shoppingCart.forEach(item => {
        total+=item.price;
    });
    ComputeTax(total);
});

function AddToOrder(item) { 
    $("#order-list").append("<li>" + item.name + "</li>");
    $("#prices").append("<p>" + item.price + "</p>");
};

function Total(shoppingCart) {
    var total = 0;
    shoppingCart.forEach(item => {
        total+=item.price;
    });
    $("#running-total").empty();
    $("#running-total").append(total.toFixed(2));
};

function ComputeTax(total) {
    var tax = 0.06*total;
    $("#tax").append(tax.toFixed(2));
    ComputeGrandTotal(total, tax);
}
function ComputeGrandTotal(total, tax) {
    var grandTotal = total + tax;
    $("#grand-total").append(grandTotal.toFixed(2));
}

});



