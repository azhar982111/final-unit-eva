// All the Code for the Rejected page goes here

let receiveddata = JSON.parse(localStorage.getItem("admission-rejected"))

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

    nametd.textContent = element.name
    emailtd.textContent = element.email
    coursetd.textContent = element.course
    gendertd.textContent = element.gender
    phonetdtd.textContent = element.phonenbr

    newtr.append(nametd, emailtd, coursetd, gendertd, phonetdtd,)
    tbody.append(newtr)

});
