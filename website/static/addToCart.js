//add to cart file

var addItemid = 0;
var added = 0;
var x = document.getElementById("cartRight");

function addToCart(priceItem, image){
    addItemid +=1;
    // display the right side cart view when the addToCartbutton is pressed
    if (x.style.display == "none"){
        x.style.display = "block";
    }
    added +=1
    var selectedItem = document.createElement('div');

    var img = document.createElement('img');

    
    img.src = document.getElementById('image1').getAttribute('href');
    img.setAttribute('width', "200px")
    var showPrice = document.createElement('div');
    showPrice.innerHTML += priceItem.innerText;
    
    selectedItem.append(img)
    selectedItem.append(showPrice)
    

    document.getElementById("cartRight").appendChild(selectedItem);
    document.getElementById('titl').innerText = "CART(" + added +")";
    document.getElementById("cart").innerHTML = "Cart(" + added +")";

}


function checkoutPage(){
    window.location.href = "http://127.0.0.1:5000/cart"
    // http://127.0.0.1:5000/cart
}

function addToShoppingCartPage(){

    var newE = document.createElement('div');
    var newETwo = document.createElement('div');
    var newEThree = document.createElement('div');
    var newEFour = document.createElement('div');
    var newEFive = document.createElement('div');
    var newESix = document.createElement('div');

    //price

    var newESeven = document.createElement('div');
    var newEEight = document.createElement('div');

    
    var productDesc = document.createTextNode("Large Pizza");
    var productName = document.createTextNode("Hawaiian Pizza");

    var img = document.createElement('img');
    
    img.setAttribute("class", "img-fluid");
    img.setAttribute('src', "http://127.0.0.1:5000/static/cheese.png");

    newE.setAttribute("class", "row border-top border-bottom");
    newETwo.setAttribute("class", "row main align-items-center");
    newEThree.setAttribute("class", "col-2");
    newEFour.setAttribute("class", "col");
    newEFive.setAttribute("class", "row text-muted");
    newESix.setAttribute("class", "row");

    //price
    newESeven.setAttribute("class", "col");
    
    var a = document.createElement('a');
    a.setAttribute("href", "#")
    var aTwo = document.createElement('a');
    var aThree = document.createElement('a');
    aTwo.setAttribute("href", "#");
    aTwo.setAttribute("class", "border");
    aThree.setAttribute("href", "#");
    a.innerText += "-";
    aTwo.innerText += "1";
    aThree.innerText += "+";


    // var textA = document.createTextNode("-");
    // var textATwo = document.createTextNode("1");

    newEEight.setAttribute("class", "col");
    var e = document.createElement('span');
    e.setAttribute("class", "close");
    e.innerHTML += "&#10005;";



    
    var itemRow = document.getElementById("addItemRow");

    itemRow.appendChild(newE);
    newE.appendChild(newETwo);
    newETwo.appendChild(newEThree);
    newEThree.appendChild(img);
    newETwo.append(newEFour);
    newEFour.appendChild(newEFive);

    newEFive.appendChild(productDesc);

    newEFour.appendChild(newESix);

    newESix.appendChild(productName)

    newETwo.appendChild(newESeven);
    newETwo.appendChild(newEEight);

    newESeven.append(a);
    newESeven.append(aTwo);
    newESeven.append(aThree);

    newEEight.append(e);
}



//This is a COPY OF THE FUCTION THAT WORKS
// function addToShoppingCartPage(){

//     var newE = document.createElement('div');
//     var newETwo = document.createElement('div');
//     var newEThree = document.createElement('div');
//     var newEFour = document.createElement('div');
//     var newEFive = document.createElement('div');
//     var newESix = document.createElement('div');

//     //price

//     var newESeven = document.createElement('div');
//     var newEEight = document.createElement('div');

    
//     var productDesc = document.createTextNode("Large Pizza");
//     var productName = document.createTextNode("Hawaiian Pizza");

//     var img = document.createElement('img');
    
//     img.setAttribute("class", "img-fluid");
//     img.setAttribute('src', "http://127.0.0.1:5000/static/cheese.png");

//     newE.setAttribute("class", "row border-top border-bottom");
//     newETwo.setAttribute("class", "row main align-items-center");
//     newEThree.setAttribute("class", "col-2");
//     newEFour.setAttribute("class", "col");
//     newEFive.setAttribute("class", "row text-muted");
//     newESix.setAttribute("class", "row");

//     //price
//     newESeven.setAttribute("class", "col");
    
//     var a = document.createElement('a');
//     a.setAttribute("href", "#")
//     var aTwo = document.createElement('a');
//     var aThree = document.createElement('a');
//     aTwo.setAttribute("href", "#");
//     aTwo.setAttribute("class", "border");
//     aThree.setAttribute("href", "#");
//     a.innerText += "-";
//     aTwo.innerText += "1";
//     aThree.innerText += "+";


//     // var textA = document.createTextNode("-");
//     // var textATwo = document.createTextNode("1");

//     newEEight.setAttribute("class", "col");
//     var e = document.createElement('span');
//     e.setAttribute("class", "close");
//     e.innerHTML += "&#10005;";



    
//     var itemRow = document.getElementById("addItemRow");

//     itemRow.appendChild(newE);
//     newE.appendChild(newETwo);
//     newETwo.appendChild(newEThree);
//     newEThree.appendChild(img);
//     newETwo.append(newEFour);
//     newEFour.appendChild(newEFive);

//     newEFive.appendChild(productDesc);

//     newEFour.appendChild(newESix);

//     newESix.appendChild(productName)

//     newETwo.appendChild(newESeven);
//     newETwo.appendChild(newEEight);

//     newESeven.append(a);
//     newESeven.append(aTwo);
//     newESeven.append(aThree);

//     newEEight.append(e);


    



// }