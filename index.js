// All the JS Code for the Add Students Page Goes Here

document.getElementById("form").addEventListener("submit", postdata)


let dataarr = []

function postdata(){
event.preventDefault()
let obj = {}

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let phonenbr = document.getElementById("phone").value
let gender = document.getElementById("gender").value
let course = document.getElementById("course").value

// console.log(name,email,phonenbr,gender,course)

obj.name = name
obj.email = email
obj.phonenbr = phonenbr
obj.gender = gender
obj.course = course

// console.log(obj)
dataarr.push(obj)
console.log(dataarr)

localStorage.setItem("admission", JSON.stringify(dataarr))

}




// localStorage.removeItem("admission")