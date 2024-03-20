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
    return res.json()
}).then(function(res) {
    // In dữ liệu ra thử
    // console.log(res)
    return res
}).then(function(res) {
    // console.log(res)
    let container = document.querySelector('.container')
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





// let thongtin = {
//     hinhanh: "Link anh",
//     ten: "Ten bai viet",
//     noidung: "Noi dung bai viet",
//     tag: "Chu de bai viet",
//     ngaytao: "Ngay tao",
//     ngaydang: "ngay dang"
// }
// console.log(thongtin)

// let them = {
//     hinhanh: "Link anh",
//     ten: "Ten bai viet",
//     noidung: "Noi dung bai viet",
//     tag: "Chu de bai viet",
//     ngaytao: "Ngay tao",
//     ngaydang: "ngay dang"
// }
// console.log(them)


// let promise = new Promise(
//     function(resolve, reject) {
//         setTimeout(function(){
//             resolve("done")
//         }, 1000)
//     }
// )

// let form = document.querySelector('.form')
// const formtao = function() {
//     return `
//     <input type="text" class="add_value" placeholder="Nhập link ảnh">
//     <input type="text" class="add_value" placeholder="Nhập tiêu đề">
//     <input type="text" class="add_value" placeholder="Nhập trạng thái">
//     <textarea class="add_value" name="" id="" cols="30" rows="20" placeholder="Nhập nội dung bài viết"></textarea>
//     <button id="save">Save</button>
//     <button>X</button>
//     `
// }
// function add(formtao){
//     form.innerHTML = formtao()
// }

// let promise = new Promise (
//     function(resolve, reject) {
//         let a = document.getElementById('save')
//         let add_value =  document.getElementsByClassName('add_value')
        
//         let currentTime = new Date();
//         a.addEventListener('click', 
//             resolve(`
//             <div class="container1">
//                 <button>Edit</button><button>Delete</button>
//                 <div class="top">
//                     <img src="${add_value[0]}" alt="">
//                     <div class="published">${add_value[1]}</div>
//                 </div>
//                 <h2 class="title">${add_value[2]}</h2>
//                 <div class="description">
//                     <p>${add_value[3]}</p>
//                 </div>
//                 <div class="tag">${add_value[4]}</div>
//                 <div><span>CreateAt: </span><span>${currentTime}</span></div>
//                 <div><span>PublishAt: </span><span>${currentTime}</span></div>
//             </div>
//             `))
//         }
// ).then(function(newpost) {
//     console.log(newpost)
//     document.appendChild(newpost)
// }).catch(function() {
//     alert("Lỗi rùi")
// }).finally(function() {
//     alert("Hoàn thành") 
// })
 // gắn vào DOM <-- đợi mã HTML <-- đợi người dùng bấm save (đợi dữ liệu được nhập xong) <-- đợi cái bảng đươc bật lên (đợi bấm nút add) 
// let promise = new Promise (
//     function (resolve, reject) {
//         const addbtn = document.querySelector('.add')
//         addbtn.addEventListener('click', resolve(`
//         <input type="text" class="add_value" placeholder="Nhập link ảnh">
//         <input type="text" class="add_value" placeholder="Nhập tiêu đề">
//         <input type="text" class="add_value" placeholder="Nhập trạng thái">
//         <textarea class="add_value" name="" id="" cols="30" rows="20" placeholder="Nhập nội dung bài viết"></textarea>
//         <button class="save">Save</button>
//         <button>X</button>
//         `))
//     }
// ).then(function(table){
//     let abc = document.querySelector('.form')
//     abc.innerHTML = table
//     alert("Hãy nhập dữ liệu")
//     let abcd = function() {
//         let savebtn = document.querySelector('.save')
//         abc.innerHTML = ''
//     }
//     savebtn.addEventListener('click', abcd)
//     return document.getElementsByClassName('add_value').value
// }).then(function(data){
//     return `
//         <div class="container1">
//             <button>Edit</button><button>Delete</button>
//             <div class="top">
//                 <img src="${add_value[0]}" alt="">
//                 <div class="published">${add_value[1]}</div>
//             </div>
//             <h2 class="title">${add_value[2]}</h2>
//             <div class="description">
//                 <p>${add_value[3]}</p>
//             </div>
//             <div class="tag">${add_value[4]}</div>
//             <div><span>CreateAt: </span><span>${currentTime}</span></div>
//             <div><span>PublishAt: </span><span>${currentTime}</span></div>
//         </div>
//         `
// }).then(function(child){
//     document.appendChild(child)
// }).then(function(){
//     alert("Đã tạo bài mới")
// }).catch(function(){
//     alert("Sai rồi")
// }).finally(function(){
//     alert("Hoàn thành")
// })



