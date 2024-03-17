// callback là truyền 2 hàm vào 1 hàm
function todo(work) {
    console.log(typeof work)
    console.log(work)
    if (typeof work === 'function')
    console.log(work())     // vì không có trả về (retur) nên underfined
}
function hello() {
    console.log("hello")
}
todo(hello)
todo(123)   // lỗi vì không phải hàm
function abc (a) {

}
// prototype: nguyên mẫu
// mọi thứ js đều cấu tạo từ object --> object base
let a = new Number(2)
console.log(a)
console.log(a == 2)
console.log(a === 2)
Array.prototype. // nguyên mẫu của đối tượng
//console.log(Array.prototype)  
// đưa ra tất cả những phương thức của array, array là đối tượng, còn array.prototype là cách mình gọi là những thuộc tính và phuowngt hức của đối tượng array
// Array.prototype.hello = function() {
    console.log("hello ne")
//} 
let k = [abc]
k.hello()
const obj = {

}
function person(age, name) { // định nghĩa hàm tạo
    this.age = age
    this.name = name
    this.say = function () {
        console.log("he lô")
        //... this đại diện cho đối tuowgj dduocj wkhoiwr tạo
    }
    this.child = {
        name: "child",
        say:  function () {
            console.log("abc", this)
        }
    }
}
const hinam = new person(22, 'quang') // khởi tạo
console.log(hinam.child.say()) // trỏ vào đối tượng gần nhất
person.prototype.bocuahinam = "A" // thêm thuộc tính, truy về nguyên bản