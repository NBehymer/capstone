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
// function addToCart(item){
//     var selectedItem = document.createElement('div');
//     // selectedItem.classList.add('cartImage');
//     selectedItem.setAttribute('id', addItemid);
//     // var image = document.createElement('image');
//     // image.setAttribute('src', item.children[0].currentSrc);
//     var label = document.createElement('div');
//     document.getElementById("ShowPrice")
//     var cartItems = document.getElementById('title');
//     // selectedItem.append(image);
//     selectedItem.append(label);
//     cartItems.append(selectedItem);


// }

function checkoutPage(){
    window.location.href = "http://127.0.0.1:5000/cart"
    // http://127.0.0.1:5000/cart
}