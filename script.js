import {numbers,harita} from "./maps.js"
console.log(harita)

const block = document.getElementsByClassName("block");
const cover = document.getElementsByClassName("cover");
const container = document.querySelector("#container");
const input = document.querySelectorAll("input");
const finish = document.getElementById("finish");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const btn = document.querySelectorAll("button");



//? OYUN HARİTASI
const map = harita


container.addEventListener("click",(e)=> {
    const around = [];
    const element = e.target;
    const elementId = element.id;
    //console.log(map[elementId],elementId)

    if(element.matches("div.cover")) {
        cover[elementId-1].style.display = "none";

        if(map[elementId] == "0") {
            //console.log("boşa bastın")
            if(elementId<70 && elementId>10 && !(elementId%10 == 1) && !(elementId%10 == 0)){
                around.push(elementId-11,elementId-10,elementId-9,elementId-1,
                    parseInt(elementId)+1,parseInt(elementId)+9,
                    parseInt(elementId)+10,parseInt(elementId)+11)
            }
            if((elementId == 1)){
                around.push(parseInt(elementId)+1, parseInt(elementId)+10, parseInt(elementId)+11)
            }
            if((elementId == 10)){
                around.push(elementId-1, parseInt(elementId)+9, parseInt(elementId)+10)
            }
            if((elementId == 71)){
                around.push(elementId-10, elementId-9, parseInt(elementId)+1)
            }
            if((elementId == 80)){
                around.push(elementId-11, elementId-10, elementId-1)
            }
            //? TOP
            if((elementId > 1) && (elementId < 10)){
                around.push(elementId-1, parseInt(elementId)+1, parseInt(elementId)+9,
                 parseInt(elementId)+10, parseInt(elementId)+11)
            }
            //? RİGHT
            if(!(elementId == 10) && !(elementId == 80) && (elementId%10 == 0)){
                around.push(elementId-11, elementId-10, elementId-1,
                 parseInt(elementId)+9, parseInt(elementId)+10)
            }
            //? LEFT
            if(!(elementId == 1) && !(elementId == 71) && (elementId%10 == 1)){
                around.push(elementId-10, elementId-9, parseInt(elementId)+1,
                 parseInt(elementId)+10, parseInt(elementId)+11)
            }
            //? BOTTOM
            if((elementId > 71) && (elementId < 80)){
                around.push(elementId-11, elementId-10, elementId-9,
                    elementId-1, parseInt(elementId)+1)
            }
            
            
            for(let i = 0; i<15; i++) {
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
                    //? SOL ÜST KÖŞE
                    if(map[e] == "0" && (e == 1)){
                        if(!around.includes(parseInt(e)+1)) {
                            around.push(parseInt(e)+1)
                        }
                        if(!around.includes(parseInt(e)+10)) {
                            around.push(parseInt(e)+10)
                        }
                        if(!around.includes(parseInt(e)+11)) {
                            around.push(parseInt(e)+11)
                        }
                    }
                    //? SOL ALT KÖŞE
                    if(map[e] == "0" && (e == 71)){
                        if(!around.includes(parseInt(e)+1)) {
                            around.push(parseInt(e)+1)
                        }
                        if(!around.includes(parseInt(e)-10)) {
                            around.push(parseInt(e)-10)
                        }
                        if(!around.includes(parseInt(e)-9)) {
                            around.push(parseInt(e)-9)
                        }
                    }
                    //? SAĞ ALT KÖŞE
                    if(map[e] == "0" && (e == 80)){
                        if(!around.includes(parseInt(e)-11)) {
                            around.push(parseInt(e)-11)
                        }
                        if(!around.includes(parseInt(e)-10)) {
                            around.push(parseInt(e)-10)
                        }
                        if(!around.includes(parseInt(e)-1)) {
                            around.push(parseInt(e)-1)
                        }
                    }
                    //? SAĞ ÜST KÖŞE
                    if(map[e] == "0" && (e == 10)){
                        if(!around.includes(parseInt(e)-1)) {
                            around.push(parseInt(e)-1)
                        }
                        if(!around.includes(parseInt(e)+9)) {
                            around.push(parseInt(e)+9)
                        }
                        if(!around.includes(parseInt(e)+10)) {
                            around.push(parseInt(e)+10)
                        }
                    }
                    //?  ÜST KENAR
                    if(map[e] == "0" && (e > 1) && (e < 10)){
                        if(!around.includes(parseInt(e)-1)) {
                            around.push(parseInt(e)-1)
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
                    //?  SOL KENAR
                    if(map[e] == "0" && (e%10 == 1) && !(e == 71) && !(e == 1)){
                        if(!around.includes(parseInt(e)-10)) {
                            around.push(parseInt(e)-10)
                        }
                        if(!around.includes(parseInt(e)-9)) {
                            around.push(parseInt(e)-9)
                        }
                        if(!around.includes(parseInt(e)+1)) {
                            around.push(parseInt(e)+1)
                        }
                        if(!around.includes(parseInt(e)+10)) {
                            around.push(parseInt(e)+10)
                        }
                        if(!around.includes(parseInt(e)+11)) {
                            around.push(parseInt(e)+11)
                        }
                    }
                    //?  SAĞ KENAR
                    if(map[e] == "0" && (e%10 == 0) && !(e == 10) && !(e == 80)){
                        if(!around.includes(parseInt(e)-11)) {
                            around.push(parseInt(e)-11)
                        }
                        if(!around.includes(parseInt(e)-10)) {
                            around.push(parseInt(e)-10)
                        }
                        if(!around.includes(parseInt(e)-1)) {
                            around.push(parseInt(e)-1)
                        }
                        if(!around.includes(parseInt(e)+10)) {
                            around.push(parseInt(e)+10)
                        }
                        if(!around.includes(parseInt(e)+9)) {
                            around.push(parseInt(e)+9)
                        }
                    }
                    //?  ALT KENAR
                    if(map[e] == "0" && (e < 80) && (e > 71)){
                        if(!around.includes(parseInt(e)-11)) {
                            around.push(parseInt(e)-11)
                        }
                        if(!around.includes(parseInt(e)-10)) {
                            around.push(parseInt(e)-10)
                        }
                        if(!around.includes(parseInt(e)-9)) {
                            around.push(parseInt(e)-9)
                        }
                        if(!around.includes(parseInt(e)-1)) {
                            around.push(parseInt(e)-1)
                        }
                        if(!around.includes(parseInt(e)+1)) {
                            around.push(parseInt(e)+1)
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


btn[0].addEventListener("click", ()=> {
    location.reload();
})
btn[1].addEventListener("click", ()=> {
    location.reload();
})