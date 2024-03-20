// ban đầu khi lấy data về thì lấy về 1 promise
const data = fetch('https://jsonplaceholder.org/posts?fbclid=IwAR2gCbAC-UnBs0tm_EYtXoqIhEjmNQo8RRH55DKIJN38dJpy-tt0mnT1nH0')
// fetch là 1 promise trả về return của hàm 
// resolve hoặc reject và finaly
// then hứng return của resolve --> resolve khi logic của hàm đúng
// catch hứng reject --> reject khi logic của hàm sai
// finaly trường hợp nào cũng chạy --> đúng sai gì cũng chạy, xử lý loading
// khi chưa .then/ .catch thì trạng thái của promise là pending
// .then thì trạng thái của promise là fullfilled
// .catch thì trạng thái promise là rejected
// ----------------------------------------------------------------------
// res ở đây là return của resolve
data.then(function(res) {
    // In response ra thử
    // console.log(res)
    // json dùng để chuyển đổi Response (phản hồi) thành dữ liệu
    console.log(res)
    return res.json()
}).then(function(res) {
    // In dữ liệu ra thử
    // console.log(res)
    return res
}).then(function(res) {
    // console.log(res)
    let container = document.querySelector('.container')
    console.log(res)
    // chạy map ném vào callback
    const childs = res.map(function(item) {
        return `
        <div class="container1">
            <div class="top">
                <img src="${item.image}" alt="">
                <div class="published">${item.status}</div>
            </div>
            <h2 class="title">${item.title}</h2>
            <div class="description">
                <p>${item.content}</p>
            </div>
            <div class="tag">${item.slug}</div>
            <div><span>CreateAt: </span><span>${item.publishedAt}</span></div>
            <div><span>PublishAt: </span><span>${item.updatedAt}</span></div>
        </div>
        `
    })
    // console.log(container)
    // innner.HTML thay thế bất kỳ phần tử nào có trong HTML trước đó
    container.innerHTML = childs.join("")
}).catch(function(err){
    console.log("loi", err)
}).finally(function() {
    console.log("finally")
})

function getdata() {
    let dataNode = document.querySelectorAll('.add_value')
    console.log(dataNode)
    let data = []
    for (let i = 0; i < dataNode.length; i = i + 1) {
        data[i] = dataNode[i].value
    }
    console.log(data)
    let currentTime = new Date();
    return `
    <div class="container1">
        <div class="top">
            <img src="${data[0]}" alt="">
            <div class="published">${data[1]}</div>
        </div>
        <h2 class="title">${data[2]}</h2>
        <div class="description">
            <p>${data[3]}</p>
        </div>
        <div class="tag">${data[4]}</div>
            <div><span>CreateAt: </span><span>${currentTime}</span></div>
            <div><span>PublishAt: </span><span>${currentTime}</span></div>
    </div>
    `
}

let createbtn = document.querySelector('.create')
createbtn.onclick = function() {
    let child = getdata()
    let newpost =  document.querySelector('.new')
    newpost.innerHTML = child
}




