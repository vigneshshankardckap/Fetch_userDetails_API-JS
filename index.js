// target the div 
const show = document.querySelector(".content")
const malebtn = document.querySelector("#male")
const femalebtn = document.querySelector("#female")
const load = document.querySelector("i")
const more = document.querySelector(".more")
const search = document.querySelector(".search")






window.addEventListener("DOMContentLoaded", () => {
    let count = 21
    more.addEventListener("click", () => {
        count += 21
        jsonlogic()
    })
     jsonlogic();
   function jsonlogic(){
    fetch(`https://randomuser.me/api?results=${count}`)
        .then(res => res.json())
        .then(data => {
            load.style.display = "none"

            for (i = 0; i < data.results.length; i++) {
                filters(data.results[i])
            }



            malebtn.addEventListener("click", (e) => {
                malebtn.classList.toggle("active")
                femalebtn.classList.remove("active")


                let list = document.querySelectorAll(".person")
                removedata(list)
                for (j = 0; j < data.results.length; j++) {
                    filters(data.results[j])
                }


            })



            femalebtn.addEventListener("click", (e) => {
                femalebtn.classList.toggle("active")
                malebtn.classList.remove("active")


                let list = document.querySelectorAll(".person")
                removedata(list)
                for (j = 0; j < data.results.length; j++) {
                    filters(data.results[j])
                }
            })


            search.addEventListener("keyup", () => {
                let namelist = document.querySelectorAll("#name")
                for (s = 0; s < namelist.length; s++) {
                    if (namelist[s].innerText.toUpperCase().indexOf(search.value.toUpperCase()) != -1) {
                        namelist[s].parentElement.parentElement.style.display = "block"
                    }
                    else {
                        namelist[s].parentElement.parentElement.style.display = "none"
                    }


                }
            })


            function filters(data) {
                if (malebtn.classList.contains("active")) {
                    if (data.gender == "male") {
                        createdata(data)
                    }
                }
                else if (female.classList.contains("active")) {
                    if (data.gender == "female") {
                        createdata(data)
                    }
                }
                else {
                    createdata(data)
                }
            }


            function removedata(list) {
                for (let a = 0; a < list.length; a++) {
                    list[a].remove();
                }

            }

            function createdata(persondata) {

                let person = document.createElement("div")
                person.setAttribute("class", "person")
                show.append(person)

                let a = document.createElement("a")
                a.href = `./user.html?id=${persondata.id.value}`
                person.append(a)

                let img = document.createElement("img")
                img.setAttribute("id", "imgs")
                img.src = persondata.picture.large
                a.append(img)


                let name = document.createElement("li")
                name.setAttribute("id", "name")
                name.innerText = `${persondata.name.first}  ${persondata.name.last}`
                a.append(name)



                let personimg = document.querySelectorAll("#imgs")
                let personname = document.querySelectorAll("#name")

                for (let c = 0; c < personimg.length; c++) {

                    personimg[c].addEventListener("mouseenter", () => {
                        personimg[c].style.filter = "blur(4px)"
                        personname[c].style.visibility = "visible"
                    })

                    personimg[c].addEventListener("mouseout", () => {
                        personimg[c].style.filter = "blur(0px)"
                        personname[c].style.visibility = "hidden"
                    })
                    personname[c].addEventListener("mouseenter", () => {
                        personimg[c].style.filter = "blur(4px)"
                        personname[c].style.visibility = "visible"
                    })

                    personname[c].addEventListener("mouseout", () => {
                        personimg[c].style.filter = "blur(0px)"
                        personname[c].style.visibility = "hidden"
                    })
                }

            }

        })







    }





})

