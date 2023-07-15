
let user=document.querySelector(".userdetails")
// console.log(user);
let loads=document.querySelector("i")

let ids=window.location.search;
console.log(ids);


window.addEventListener("DOMContentLoaded",()=>{
    fetch(`https://randomuser.me/api?id=${ids}`)
    
    .then(uses=>uses.json())
    .then(data=>{
        
        loads.style.display = "none"

     let userimg=document.createElement("img")
     userimg.src=data.results[0].picture.large
       user.append(userimg)

       let createName = document.createElement("li")
        createName.innerText = `Name : ${data.results[0].name.first}  ${data.results[0].name.last}`
        user.append(createName)

        let mainLi = document.createElement("li")
        mainLi.innerText = `Gender : ${data.results[0].gender}`
        user.append(mainLi)

        let DOB = document.createElement("li")
        DOB.innerText = `DOB : ${data.results[0].dob.date}`
        user.append(DOB)

        let email=document.createElement("li")
        email.innerText=`Email:${data.results[0].email}`
        user.append(email)

        let loc=document.createElement("li")
        loc.innerText=`Location:${data.results[0].location.city}`
        user.append(loc)

        let phone=document.createElement("li")
        phone.innerText=`phone number: ${data.results[0].phone}`
        user.append(phone)

        let state =document.createElement("li")
        state.innerText=`State:${data.results[0].location.state}`
        user.append(state)

    })
})