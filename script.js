import {numbers,harita} from "./maps.js"
console.log(harita)

const block = document.getElementsByClassName("block");
const cover = document.getElementsByClassName("cover");
const container = document.querySelector("#container");
const input = document.querySelectorAll("input");
const finish = document.getElementById("finish");
const win = document.getElementById("win");
const lose = document.getElementById("lose");



//? OYUN HARİTASI
const map = harita


container.addEventListener("click",(e)=> {
    const around = [];
    const element = e.target;
    const elementId = element.id;
    //console.log(map[elementId],elementId)

    if(element.matches("div.cover")) {
        cover[elementId-1].style.display = "none";

        if(map[elementId] == "0" && elementId<70 && elementId>10 && !(elementId%10 == 1) && !(elementId%10 == 0)) {
            //console.log("boşa bastın")
            around.push(elementId-11,elementId-10,elementId-9,elementId-1,
                parseInt(elementId)+1,parseInt(elementId)+9,parseInt(elementId)+10,parseInt(elementId)+11)
            
            for(let i = 0; i<8; i++) {
                around.forEach((e)=> {
                    if(map[e] == "0" && e<70 && e>10 && !(e%10 == 1) && !(e%10 == 0)) {
                        //! around.push(e-11,e-10,e-9,e-1,parseInt(e)+1,parseInt(e)+9,parseInt(e)+10,parseInt(e)+11)
                        if(!around.includes(e-11)) {
                            around.push(e-11)
                        }
                        if(!around.includes(e-10)) {
                            around.push(e-10)
                        }
                        if(!around.includes(e-9)) {
                            around.push(e-9)
                        }
                        if(!around.includes(e-1)) {
                            around.push(e-1)
                        }
                        if(!around.includes(parseInt(e)+1)) {
                            around.push(parseInt(e)+1)
                        }
                        if(!around.includes(parseInt(e)+9)) {
                            around.push(parseInt(e)+9)
                        }
                        if(!around.includes(parseInt(e)+10)) {
                            around.push(parseInt(e)+10)
                        }
                        if(!around.includes(parseInt(e)+11)) {
                            around.push(parseInt(e)+11)
                        }
                    }
                })
            }
            
        }
        
        around.forEach((e)=> {
            cover[e-1].style.display = "none";
        })
    }

    if(map[elementId] == "*") {
        console.log("mayına bastın")
        finish.style.display = "flex"
        lose.style.display = "flex"
    }

})

for(let i = 0; i<input.length; i++) {
    input[i].value = map[i+1];
    if (map[i+1] == "0") {
        input[i].value = "";
    }
}
