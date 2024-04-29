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
        },
        {
            image: './Images/blog5.jpeg',
            title: 'Áo blazer không thể thiếu dành cho mùa thu',
            content: 'Gen Z là thế hCân nhắc tới combo gồm áo blazer màu be với một chiếc quần jeans hay chân váy ngắn là lựa chọn không thể thiếu của các cô gái nào thích...',
            date: '18/07/2022'
        },
        {
            image: './Images/blog6.jpeg',
            title: 'Chọn trang phục gì để vừa trẻ trung vừa thanh lịch',
            content: 'Lựa chọn trang phục luôn khiến nhiều chị em “đau đầu” để làm thế nào cho vừa thoải mái, vừa phù hợp, vừa fashion luôn là những vấn đề nan giải...',
            date: '27/15/2022'
        }
    ]
}

for (let items of post.data){
    let card = document.createElement('a')
    card.setAttribute("href", "./chitietblog.html");
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

    document.getElementById("blog-posts").appendChild(card);
    //document.getElementById("blog-posts-right").appendChild(card);

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

    // document.getElementById("blog-posts").appendChild(card);
    // document.getElementById("blog-posts-right").appendChild(card);

}