// HTML DOM

// 1. Element
// 2. Attribute
// 3. Text


//---------------------

// Javascript: Browser | Server (NodeJS)

// Application programing interface

// Browser: HTML --> DOM --> DOM (WEB) API

let boxElement = document.querySelector('.box')

// ClassList property
console.log(boxElement.classList.add('red'))

console.log(boxElement.classList.contains('red'))


setTimeout(() => {
    console.log(boxElement.classList.remove('red'))
    // Kiểm tra có class red không, không có thì thêm
    // có thì gỡ bỏ
    console.log(boxElement.classList.toggle('red'))
}, 3000);

// DOM Event

// 1. Attribute events
// 2. Assign event using the element node
