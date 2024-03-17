// const wait = setTimeout(function() {
//     console.log("first")
// }, 0)
// // bất đồng bộ
// // Nhưng xtacs vụ mất đồng bộ
// // đọc file, API, timeout, interval
// console.log("second")

// let person = {
//     abc: rufhur
// }
// let p1 = person() 

// function person1(name,age,dob) {
//     this.name = name;
//     this.age = age;
//     this.dob = dob
// }
// const p2 = new person1("Nguyen Van A","14","12/12/2004")

// let promise = new Promise(
//     function(resolve, reject) {
//         setTimeout(function(){
//             resolve("done")
//         }, 1000)
//     }
// )
const data = fetch('https://jsonplaceholder.typicode.com/todos/')
data.then(function(res) {
    console.log(res)
    return res.json()
}).then(function(res) {
    console.log(res)
    let container = document.getElementById("container")
    const childs = res.map(function(item) {
        return `
        <div class="article">
            <h1>${item.title}</h1>
            <p>${item.id}</p>
        </div>
        `
    });
    console.log(container)
    container.innerHTML = childs.join("")
})










// let a = 0
// const loop = setInterval(function() {
//     console.log(a++)
// },10000)

// function stop() {
//     clearInterval(loop)
//     clearTimeout(wait)
// }

// let promise = new Promise() {
    
// }