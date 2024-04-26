// -------------------------Header----------------------------
const header = document.querySelector("header")
window.addEventListener("scroll",function(){
    x = window.pageYOffset
    // console.log(x)
    if(x > 0.0){
        header.classList.add("sticky")
    }else{
        header.classList.remove("sticky")
    }
})

// -------------------------Cartegory--------------------------
// const itemsliderbar = document.querySelectorAll("cartegory-left-li")
// itemsliderbar.forEach(function(menu,index){
//     menu.addEventListener("click",function(){
//         menu.classList.toggle("block") 
//     }) 
// })


//--------------- Sản phẩm đề xuất
let products3 = {
    data: [
        {
            id: 'quan2',
            name: 'Quần Basic Short Màu Dark Green SP248',
            price1: '59.000đ',
            price2: '205.000đ',
            price: 59000,
            image: "./Images/quan2.webp"
        },
        {
            id: 'quan1',
            name: 'Quần Short Kaki Túi Hộp Màu Basic SP600',
            price1: '185.000đ',
            price2: '350.000đ',
            price: 185000,
            image: "./Images/quan1.webp"
        },
        {
            id: 'ao5',
            name: 'Áo Thun Local Brand Unisex Goose On Animal Planet TS 311',
            price1: '190.000đ',
            price2: '350.000đ',
            price: 190000,
            image: "./Images/ao5.jpeg"
        },
        {
            id: 'hd2',
            name: 'Áo Thun Local Brand Unisex Studies Tshirt TS232',
            price1: '150.000đ',
            price2: '300.000đ',
            price: 150000,
            image: "./Images/ao7.webp"
        }
    ]
}

for (let items of products3.data){
    let card = document.createElement("div")
    card.classList.add("cartegory-right-content-item")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    card.appendChild(image)

    let name = document.createElement("h1");
    name.innerHTML = items.name;
    card.appendChild(name)

    let price_row = document.createElement("div")
    // price_row.classList.add("price")
    price_row.classList.add("row")
    price_row.classList.add("price")

    let price1 = document.createElement("div")
    price1.classList.add("price1")
    price1.innerHTML = items.price1
    price_row.appendChild(price1)

    let price2 = document.createElement("div")
    price2.classList.add("price2")
    price2.innerHTML = items.price2
    price_row.appendChild(price2)

    card.appendChild(price_row)

    let btn = document.createElement("button")
    btn.classList.add("add-cart")
    btn.setAttribute("onclick", "addToCart()")
    btn.innerHTML = "Thêm vào giỏ hàng"
    card.appendChild(btn)

    document.getElementById("product3").appendChild(card);
    // console.log('da hien '+String(items))
}