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

const headerMenu = document.querySelector('.header__menu')
const overlay = document.querySelector('.overlay')
const headerMobileMenubar = document.querySelector('.header__mobile--menubar')
const showMenu = () => {
    overlay.classList.toggle('show')
    headerMenu.classList.toggle('show')
    headerMobileMenubar.classList.toggle('show')
}

const hideOverlay = () => {
    overlay.classList.remove('show')
    headerMenu.classList.remove('show')
    headerMobileMenubar.classList.remove('show')
}

const showSuccessSignUp = () => {
    const popupLogin = document.querySelector('.popup__login')
    popupLogin.classList.add('show')
}

const showSize = () => {
    const popupSize = document.querySelector('.popup__size')
    popupSize.classList.add('show')
}

document.getElementById("container_size")?.addEventListener("click", function(event) {
    const popupSize = document.querySelector('.popup__size')
    if (event.target.id === "image_size") {
        event.stopPropagation();
    } else {
        popupSize.classList.remove('show')
    }
});

function checkEnter(event) {
    if (event.key === "Enter") {
        window.location.href = 'timkiem.html'
    }
}

function search() {
    window.location.href = 'timkiem.html'
}

let products = {
    data: [
        {
            id: 'ao11',
            name: 'Áo Thun Local Brand Unisex Cat On Animal Planet TS230',
            price1: '185.000đ',
            price2: '350.000đ',
            price: 185000,
            image: "./Images/ao11.png",
            soldOut: 'sold out'
        },
        {
            id: 'ao1',
            name: 'Áo Thun Local Brand Unisex Cat On Animal Planet TS230',
            price1: '185.000đ',
            price2: '300.000đ',
            price: 185000,
            image: "./Images/ao1.webp"
        },
        {
            id: 'ao2',
            name: 'Áo Polo Washed Localbrand Unisex Logo AP025',
            price1: '220.000đ',
            price2: '350.000đ',
            price: 220000,
            image: "./Images/ao2.jpeg"
        },
        {
            id: 'ao3',
            name: 'Áo Thun Crewz Unisex Local Brand TS039',
            price1: '125.000đ',
            price2: '200.000đ',
            price: 125000,
            image: "./Images/ao3.jpeg"
        },
        {
            id: 'ao4',
            name: 'Áo Thun Local Brand Unisex Goose On Animal Planet TS 299',
            price1: '190.000đ',
            price2: '350.000đ',
            price: 190000,
            image: "./Images/ao4.webp"
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
            id: 'ao6',
            name: 'Áo Sơ Mi Symbol Basic Logo SS047',
            price1: '195.000đ',
            price2: '330.000đ',
            price: 195000,
            image: "./Images/ao6.webp"
        },
        {
            id: 'hd3',
            name: 'Áo Hoodie Local Brand Unisex " Mom’s favorite kido " Hoodie HD081',
            price1: '349.000đ',
            price2: '550.000đ',
            price: 349000,
            image: "./Images/hd3.webp"
        },
        {
            id: 'hd2',
            name: 'Áo Hoodie Local Brand Unisex " Tết Là Sum họp" Hoodie HD080',
            price1: '349.000đ',
            price2: '550.000đ',
            price: 349000,
            image: "./Images/hd2.webp"
        },
        {
            id: 'hd1',
            name: 'Áo Hoodie Local Brand Unisex Thêu Logo Basic HD074',
            price1: '250.000đ',
            price2: '400.000đ',
            price: 250000,
            image: "./Images/hd1.webp"
        }
    ]
}

for (let items of products.data){
    let card = document.createElement("a")
    if(!items.soldOut) {
        card.setAttribute("href", "./chitietsanpham.html");
    }
    if(items.soldOut) {
        card.classList.add("sold-out-item")
    }
    container = document.createElement("div");
    container.classList.add("cartegory-image");

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    container.appendChild(image)

    if (items.soldOut) {
        let soldOutDiv = document.createElement('div');
        soldOutDiv.classList.add('sold-out');
        soldOutDiv.innerHTML = items.soldOut
        container.appendChild(soldOutDiv);
    }

    card.appendChild(container);
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

    document.getElementById("products").appendChild(card);
    // console.log('da hien '+String(items))
}