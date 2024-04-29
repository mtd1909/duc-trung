// --------------------------------------------Header
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

// -------------------------------------------Slider
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector(".aspect-ratio-169")
let index = 0
let imgNumber = imgPosition.length
const dotItem = document.querySelectorAll(".dot")
console.log(imgPosition)

imgPosition.forEach(function(image,index){
    console.log(image,index)
    image.style.left = index*100 + "%"
    dotItem[index].addEventListener("click",function(){
        slider(index)
    })
})

function imgSlide(){
    index++;
    console.log(index);
    if(index >= imgNumber){index = 0}
    slider(index)
}
function slider(index){
    imgContainer.style.left = "-" + index*100 + "%"
    const dotActive = document.querySelector(".active")
    dotActive.classList.remove("active")
    dotItem[index].classList.add('active')
}
setInterval(imgSlide,5000)

// ----------------------------------------------Products
            // Bán chạy
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
        }
    ]
}

for (let items of products.data){
    let card = document.createElement("div")
    card.classList.add("cartegory-right-content-item")
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

    document.getElementById("product1").appendChild(card);
    // console.log('da hien '+String(items))
}

            // Sản phẩm mới
let products2 = {
    data: [
        {
            id: 'ao5',
            name: 'Áo Thun Local Brand Unisex Goose On Animal Planet TS 311',
            price1: '190.000đ',
            price2: '350.000đ',
            price: 190000,
            image: "./Images/ao5.jpeg"
        },
        {
            id: 'hd1',
            name: 'Áo Hoodie Local Brand Unisex Thêu Logo Basic HD074',
            price1: '250.000đ',
            price2: '400.000đ',
            price: 250000,
            image: "./Images/hd1.webp"
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
        }
    ]
}

for (let items of products2.data){
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

    document.getElementById("product2").appendChild(card);
    // console.log('da hien '+String(items))
}

            // Sản phẩm mới
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
            id: 'quandai',
            name: 'Quần Baggy Nam Ống Rộng Dáng Suông Nhung Tăm PL093',
            price1: '99.000đ',
            price2: '220.000đ',
            price: 99000,
            image: "./Images/quandai.jpeg"
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

// --------------------- BLOG
let post = {
    data: [
        {
            image: './Images/blog1.png',
            title: 'Những gam màu không thể thiếu trong dịp Tết năm Giáp Thìn',
            content: 'Màu sắc của trang phục là một trong những yếu tố rất quan trọng. Đây không chỉ là yếu tố tạo được điểm nhấn, sự khác biệt mà còn là ngôn ngữ của cảm xúc...',
            date: '28/03/2024'
        },
        {
            image: './Images/blog2.jpeg',
            title: '5 tips mix áo thun oversize chuẩn phong cách ấn tượng',
            content: 'Áo phông oversize đang là một hot item dẫn đầu xu hướng thời trang giới trẻ hiện nay. Ngày càng nhiều các bạn trẻ yêu thích, ưa chuộng và....',
            date: '15/01/2024'
        },
        {
            image: './Images/blog3.jpeg',
            title: 'Cách để genz thể hiện bản thân họ thông qua thời trang',
            content: 'Gen Z là thế hệ trẻ đầy sáng tạo và thể hiện bản thân của họ thông qua thời trang. Họ thích sử dụng những màu sắc nổi bật, phong cách độc đáo và các hiệu...',
            date: '26/11/2023'
        },
        {
            image: './Images/blog4.jpeg',
            title: 'Trang phục nhàu nhĩ nhăn nhúm mốt hot xuân hè 2023',
            content: 'Trang phục nhàu nhĩ nhăn nhúm được xem là mốt hot của mùa Xuân Hè 2023, thay vì là lượt phẳng phiu. Nhiều người không có thói quen là quần áo chắc....',
            date: '12/03/2023'
        }
    ]
}

for (let items of post.data){
    let card = document.createElement('div')
    card.classList.add('blog-item')

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    card.appendChild(image)

    let name = document.createElement('h1')
    name.innerHTML = items.title;
    card.appendChild(name)

    let contents = document.createElement('div')
    contents.classList.add('blog-info')
    contents.innerHTML = items.content;
    card.appendChild(contents)

    let blog_date = document.createElement('div')
    blog_date.classList.add('row')
    blog_date.classList.add('date-container')

    // let icon = document.createElement('i')
    // icon.classList.add('fa')
    // icon.classList.add('fa-calendar')
    // blog_date.appendChild(icon)
    // blog_date.append('<i class="fa fa-calendar"></i>')
    // blog_date.innerHTML ='<i class="fa fa-calendar"></i>' + items.date;
    blog_date.innerHTML = items.date;

    let more = document.createElement('div')
    let btn_more = document.createElement('a')
    btn_more.setAttribute("href","#")
    btn_more.innerHTML = 'Xem thêm'
    more.appendChild(btn_more)
    blog_date.appendChild(more)
    card.appendChild(blog_date)

    document.getElementById("blog-post")?.appendChild(card);

}
