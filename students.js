// All the Code for All Students Page Goes Here
let receiveddata = JSON.parse(localStorage.getItem("admission"))

console.log(receiveddata)


var tbody = document.getElementById("tbody")

receiveddata.forEach((element, index) => {
    let newtr = document.createElement("tr")
    newtr.setAttribute("id", "tr" + index)
    let nametd = document.createElement("td")
    nametd.setAttribute("id", "nametd" + index)
    let emailtd = document.createElement("td")
    emailtd.setAttribute("id", "emailtd" + index)
    let coursetd = document.createElement("td")
    coursetd.setAttribute("id", "coursetd" + index)
    let gendertd = document.createElement("td")
    gendertd.setAttribute("id", "gendertd" + index)
    let phonetdtd = document.createElement("td")
    phonetdtd.setAttribute("id", "phonetdtd" + index)
    let admittedtd = document.createElement("td")
    admittedtd.setAttribute("id", "admitted" + index)
    let rejectedtd = document.createElement("td")
    rejectedtd.setAttribute("id", "rejected" + index)

    nametd.textContent = element.name
    emailtd.textContent = element.email
    coursetd.textContent = element.course
    gendertd.textContent = element.gender
    phonetdtd.textContent = element.phonenbr

    admittedtd.textContent = "Admitted"

    admittedtd.addEventListener("click", function () {
        Admitted(index)
    })

    rejectedtd.textContent = "Rejected"
    rejectedtd.addEventListener("click", function () {
        Rejected(index)
    })

    newtr.append(nametd, emailtd, coursetd, gendertd, phonetdtd, admittedtd, rejectedtd)
    tbody.append(newtr)

});

var accepted=[]
function Admitted(index) {
    var newtr = document.getElementById("tr" + index)
    let name = document.getElementById("nametd" + index).textContent
    let email = document.getElementById("emailtd" + index).textContent
    let phonenbr = document.getElementById("phonetdtd" + index).textContent
    let gender = document.getElementById("gendertd" + index).textContent
    let course = document.getElementById("coursetd" + index).textContent

    var obj = {}

    obj.name = name
    obj.email = email
    obj.phonenbr = phonenbr
    obj.gender = gender
    obj.course = course

    accepted.push(obj)

    localStorage.setItem("admission-accepted", JSON.stringify(accepted))
    newtr.innerHTML = ""
}

var rejected=[]
function Rejected(index) {
    var newtr = document.getElementById("tr" + index)
    let name = document.getElementById("nametd" + index).textContent
    let email = document.getElementById("emailtd" + index).textContent
    let phonenbr = document.getElementById("phonetdtd" + index).textContent
    let gender = document.getElementById("gendertd" + index).textContent
    let course = document.getElementById("coursetd" + index).textContent

    var obj = {}

    obj.name = name
    obj.email = email
    obj.phonenbr = phonenbr
    obj.gender = gender
    obj.course = course

    rejected.push(obj)

    localStorage.setItem("admission-rejected", JSON.stringify(rejected))

    newtr.innerHTML = ""
}
