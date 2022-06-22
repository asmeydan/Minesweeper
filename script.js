const block = document.getElementsByClassName("block");
const cover = document.getElementsByClassName("cover");
const container = document.querySelector("#container");
const input = document.querySelectorAll("input");
const finish = document.getElementById("finish");
const win = document.getElementById("win");
const lose = document.getElementById("lose");

//* SIFIR OYUN HARİTASI
// const map = {
//     "1":"0",   "2":"0",   "3":"0",   "4":"0",   "5":"0",   "6":"0",    "7":"0",   "8":"0",   "9":"0",   "10":"0",
//     "11":"0",  "12":"0",  "13":"0",  "14":"0",  "15":"0",  "16":"0",   "17":"0",  "18":"0",  "19":"0",  "20":"0",
//     "21":"0",  "22":"0",  "23":"0",  "24":"0",  "25":"0",  "26":"0",   "27":"0",  "28":"0",  "29":"0",  "30":"0",
//     "31":"0",  "32":"0",  "33":"0",  "34":"0",  "35":"0",  "36":"0",   "37":"0",  "38":"0",  "39":"0",  "40":"0",
//     "41":"0",  "42":"0",  "43":"0",  "44":"0",  "45":"0",  "46":"0",   "47":"0",  "48":"0",  "49":"0",  "50":"0",
//     "51":"0",  "52":"0",  "53":"0",  "54":"0",  "55":"0",  "56":"0",   "57":"0",  "58":"0",  "59":"0",  "60":"0",
//     "61":"0",  "62":"0",  "63":"0",  "64":"0",  "65":"0",  "66":"0",   "67":"0",  "68":"0",  "69":"0",  "70":"0",
//     "71":"0",  "72":"0",  "73":"0",  "74":"0",  "75":"0",  "76":"0",   "77":"0",  "78":"0",  "79":"0",  "80":"0"
    
// }

//? OYUN HARİTASI
const map = {
    "1":"1",   "2":"*",   "3":"1",   "4":"0",   "5":"0",   "6":"1",    "7":"*",   "8":"2",   "9":"1",   "10":"0",
    "11":"1",  "12":"1",  "13":"1",  "14":"0",  "15":"0",  "16":"1",   "17":"2",  "18":"*",  "19":"1",  "20":"0",
    "21":"0",  "22":"0",  "23":"0",  "24":"0",  "25":"0",  "26":"0",   "27":"1",  "28":"1",  "29":"1",  "30":"0",
    "31":"1",  "32":"2",  "33":"3",  "34":"2",  "35":"1",  "36":"0",   "37":"0",  "38":"0",  "39":"0",  "40":"0",
    "41":"1",  "42":"*",  "43":"*",  "44":"*",  "45":"2",  "46":"1",   "47":"0",  "48":"0",  "49":"0",  "50":"0",
    "51":"1",  "52":"2",  "53":"3",  "54":"4",  "55":"*",  "56":"2",   "57":"0",  "58":"0",  "59":"0",  "60":"0",
    "61":"0",  "62":"1",  "63":"1",  "64":"4",  "65":"*",  "66":"3",   "67":"0",  "68":"0",  "69":"0",  "70":"0",
    "71":"0",  "72":"1",  "73":"*",  "74":"3",  "75":"*",  "76":"2",   "77":"0",  "78":"0",  "79":"0",  "80":"0"
    
}


function reload() {
    window.location.reload();
}

container.addEventListener("click",(e)=> {
    const around = [];
    const element = e.target;
    const elementId = element.id;
    console.log(map[elementId],elementId)

    if(element.matches("div.cover")) {
        cover[elementId-1].style.display = "none";

        if(map[elementId] == "0" && elementId<70 && elementId>10 && !(elementId%10 == 1) && !(elementId%10 == 0)) {
            console.log("boşa bastın")
            around.push(elementId-11,elementId-10,elementId-9,elementId-1,
                parseInt(elementId)+1,parseInt(elementId)+9,parseInt(elementId)+10,parseInt(elementId)+11)
            
            for(i = 0; i<8; i++) {
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
