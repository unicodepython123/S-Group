// Object constructor: Hàm khởi tạo --> ôn kiến thức
// Đối tượng Number nhận vào 1 number
let abc = new Number(1) // --> Tạo ra 1 đối tượng number, kiểu dữ liệu object
// Đối tượng String nhận vào 1 string
let strabc = new String("Quang") // --> Tạo 1 đối tượng string, kiểu dữ liệu object
console.log(strabc)
console.log(typeof strabc)
console.log(abc)
console.log(typeof abc)
//Promise
// tạo ra 1 đối tượng và lưu vào biến promise
// Đối với đối tượng Promise sẽ nhận 1 function 
// promise có 3 trạng thái:
// 1. Pending: không resolve và không reject
// 2. Fulfilled: thành công
// 3. Rejected: thất bại
let promise = new Promise ( 
    // Function Executor chính là hàm ở dưới
    // lưu ý ngay sau khi có lệnh "new Promise" thì Function Excutor sẽ được gọi tới
    // ngay trước khi gọi biến promise
    // Luôn luôn trả về 2 tham số là resolve và reject (đều là hàm => callback)
    function(resolve, reject) {
        // logic
        // thành công: gọi tới resolve() => callback
        // thất bại: gọi tới reject() => callback
        resolve('dữ liệu')
        reject('err')
    }
) 
// hứng và thực hiện lệnh => callback
promise
    .then(function(){

    })
    .catch(function(){

    })
    .finally(function(){

    })

function sleep(ms) {
    return new Promise(function(resolve){
        setTimeout(resolve,ms)
    })
}
sleep(1000)
    .then(function(){
        console.log(1)
        return sleep(1000)
    })
    .then(function(){
        console.log(2)
        return sleep(1000)
    })
    .then(function(){
        console.log(3)
        return sleep(1000)
    })
