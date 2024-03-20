// DOM envents
// 1. Attribute events: thuộc tính sự kiện 
// --> Định nghĩa event theo dạng thuộc tính trong thẻ html
// 2. Assign event using the element node
// --> Gán sự kiện vào trong 1 node
// Tra tên sự kiện trên W3school

// 1. Attribute events: thuộc tính sự kiện 
// --> Viết mã js ngay trong tag html

// chỉ lấy element đầu tiên có class là abc 
let h1abc1 = document.querySelector('.abc')
// dùng querySelectorAll trả về 1 Node (đoạn mã html) list
let h1abc2 = document.querySelectorAll('.abc')
console.log(h1abc2)
// lấy tất cả các element có class là abc
let h1abc = document.getElementsByClassName('abc')

// cách lấy thuộc tính từ element bình thường
// bản chất là 1 callback, click vào --> onclick chạy --> gọi lại function bên trong
h1abc.onclick = function() {
    console.log(Math.random())
    // lấy bản thân element node mà mình lắng ngeh event
    console.log(h1abc)
}

// DOM events
// 1. Input / select: lấy dữ liệu từ form
// 2. Key up/ down

// chọn node cần lấy thông qua thuộc tính
let inputElement = document.querySelector('input[type="text"]')

// onchange: nếu thay đổi thì chạy, chạy khi di chuột ra bên ngoài
// oninput: gõ đến đâu ăn đến đó
// e --> trả về 1 event tùy theo event được thiết lập (mouse envent, event, ...)
inputElement.onchange = function(e) {
    console.log(e.target.value)
}

// DOM events

// 1. preventDefault: xóa bỏ sự kiện mặc định (có sẵn hoặc đã được css)
// 2. stopPripagation: loại bỏ sự kiện nổi bọt

// let aEl = document.links
// let ael = document.anchors('abc')
let aElements = document.querySelectorAll('a')

for (let i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function(e) {
        // console.log(e.target.href)
        if (!e.target.href.startsWith('https://www.youtube.com/watch?v=4ZnQur6rewg&list=PL_-VfJajZj0VgpFpEVFzS5Z-lkXtBe-x5&index=78')) {
            e.preventDefault()
        }
    }
}

document.querySelector('div').onclick = function () {
    console.log(this.innerText)
}
// khi chạy 1 sự kiện thì nó sẽ trả về 1 e (event nào tùy theo loại)
document.querySelector('button').onclick = function (e) {
    e.stopPropagation()
    console.log(this.innerText)
}

// Event listener: giúp làm nhiều việc hơn DOM event

let btn = document.getElementById('btn')

// khi sử dụng DOM event
btn.onclick = function() {
    // Việc 1
    console.log('Viec 1')

    // Việc 2
    console.log('Viec 2')

    // Việc 3
    console.log('Viec 3')

}
// callback
setTimeout(function () {
    btn.onclick = function() {}
}, 3000)

// khi sử dụng event listener
// Nhấn cùng 1 nút nhưng nó sẽ chạy theo thứ tự
function viec1() { // cú pháp hàm tên hàm là viec1
    console.log('e 1')
}
function viec2() { // cú pháp hàm tên hàm là viec2
    console.log('e 2')
}
function viec3() { // cú pháp hàm tên hàm là viec3
    console.log('e 3')
}
btn.addEventListener('click', viec1)
btn.addEventListener('click', viec2)
btn.addEventListener('click', viec3)

// hủy bỏ lắng nghe
setTimeout( function(){
    btn.removeEventListener('click',viec1)
},3000)