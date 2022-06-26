//* SIFIR OYUN HARİTASI
const harita = {
    "1":"0",   "2":"0",   "3":"0",   "4":"0",   "5":"0",   "6":"0",    "7":"0",   "8":"0",   "9":"0",   "10":"0",
    "11":"0",  "12":"0",  "13":"0",  "14":"0",  "15":"0",  "16":"0",   "17":"0",  "18":"0",  "19":"0",  "20":"0",
    "21":"0",  "22":"0",  "23":"0",  "24":"0",  "25":"0",  "26":"0",   "27":"0",  "28":"0",  "29":"0",  "30":"0",
    "31":"0",  "32":"0",  "33":"0",  "34":"0",  "35":"0",  "36":"0",   "37":"0",  "38":"0",  "39":"0",  "40":"0",
    "41":"0",  "42":"0",  "43":"0",  "44":"0",  "45":"0",  "46":"0",   "47":"0",  "48":"0",  "49":"0",  "50":"0",
    "51":"0",  "52":"0",  "53":"0",  "54":"0",  "55":"0",  "56":"0",   "57":"0",  "58":"0",  "59":"0",  "60":"0",
    "61":"0",  "62":"0",  "63":"0",  "64":"0",  "65":"0",  "66":"0",   "67":"0",  "68":"0",  "69":"0",  "70":"0",
    "71":"0",  "72":"0",  "73":"0",  "74":"0",  "75":"0",  "76":"0",   "77":"0",  "78":"0",  "79":"0",  "80":"0"
    
}

function numbers() {
    const allnums = []
    var num1 = Math.floor((Math.random()*80)+1)
    var num2 = Math.floor((Math.random()*80)+1)
    var num3 = Math.floor((Math.random()*80)+1)
    var num4 = Math.floor((Math.random()*80)+1)
    var num5 = Math.floor((Math.random()*80)+1)
    var num6 = Math.floor((Math.random()*80)+1)
    var num7 = Math.floor((Math.random()*80)+1)
    var num8 = Math.floor((Math.random()*80)+1)
    var num9 = Math.floor((Math.random()*80)+1)
    var num10 = Math.floor((Math.random()*80)+1)

    while(num2 == num1) {
        num2 = Math.floor((Math.random()*80)+1)
    }
    while(num3 == num1 || num3 == num2) {
        num3 = Math.floor((Math.random()*80)+1)
    }
    while(num4 == num1 || num4 == num2 || num4 == num3) {
        num4 = Math.floor((Math.random()*80)+1)
    }
    while(num5 == num1 || num5 == num2 || num5 == num3 || num5 == num4) {
        num5 = Math.floor((Math.random()*80)+1)
    }
    while(num6 == num1 || num6 == num2 || num6 == num3 || num6 == num4 || num6 == num5) {
        num6 = Math.floor((Math.random()*80)+1)
    }
    while(num7 == num1 || num7 == num2 || num7 == num3 || num7 == num4 || num7 == num5 || num7 == num6) {
        num7 = Math.floor((Math.random()*80)+1)
    }
    while(num8 == num1 || num8 == num2 || num8 == num3 || 
        num8 == num4 || num8 == num5 || num8 == num6 || num8 == num7) {
        num8 = Math.floor((Math.random()*80)+1)
    }
    while(num9 == num1 || num9 == num2 || num9 == num3 || num9 == num4
        || num9 == num5 || num9 == num6 || num9 == num7 || num9 == num8) {
        num9 = Math.floor((Math.random()*80)+1)
    }
    while(num10 == num1 || num10 == num2 || num10 == num3 || num10 == num4
        || num10 == num5 || num10 == num6 || num10 == num7 || num10 == num8 || num10 == num9) {
        num10 = Math.floor((Math.random()*80)+1)
    }

    
    allnums.push(num1, num2, num3,num4,num5,num6,num7,num8,num9,num10)
    allnums.forEach((e)=> {
        harita[e] = "*"
    })
    console.log(allnums)

    for(let i = 1; i <= 80; i++) {
        const v = [] ;
        var value = 0;

        //? EN ÜST SIRA SAYILARI
        if(i<10 && !(i == 1) && !(harita[i] == "*")) {
            v.push(harita[i-1],harita[i+9],harita[i+10],harita[i+11],harita[i+1])
            for(let i = 0; i < v.length; i++){
                
                if(v[i] == "*") {
                    value += 1
                }
            }
            harita[i] = value;
        }
        
        //? SOL ÜST KÖŞE SAYISI
        if(i == 1 && !(harita[i] == "*")) {
            v.push(harita[i+1],harita[i+10],harita[i+11])
            for(let i = 0; i < v.length; i++){
                
                if(v[i] == "*") {
                    value += 1
                }
            }
            harita[i] = value;
        }

        //? SAĞ ÜST KÖŞE SAYISI
        if(i == 10 && !(harita[i] == "*")) {
            v.push(harita[i-1],harita[i+9],harita[i+10])
            for(let i = 0; i < v.length; i++){
                
                if(v[i] == "*") {
                    value += 1
                }
            }
            harita[i] = value;
        }

        //? SOL ALT KÖŞE SAYISI
        if(i == 71 && !(harita[i] == "*")) {
            v.push(harita[i-10],harita[i-9],harita[i+1])
            for(let i = 0; i < v.length; i++){
                
                if(v[i] == "*") {
                    value += 1
                }
            }
            harita[i] = value;
        }

        //? SAĞ ALT KÖŞE SAYISI
        if(i == 80 && !(harita[i] == "*")) {
            v.push(harita[i-11],harita[i-10],harita[i-1])
            for(let i = 0; i < v.length; i++){
                
                if(v[i] == "*") {
                    value += 1
                }
            }
            harita[i] = value;
        }
        
        //? SOL KENAR SAYILARI
        if(!(i == 1) && !(i == 71) && (i%10 == 1) && !(harita[i] == "*")) {
            v.push(harita[i-10],harita[i-9],harita[i+1],harita[i+10],harita[i+11])
            for(let i = 0; i < v.length; i++){
                
                if(v[i] == "*") {
                    value += 1
                }
            }
            harita[i] = value;
        }

        //? SAĞ KENAR SAYILARI
        if(!(i == 10) && !(i == 80) && (i%10 == 0) && !(harita[i] == "*")) {
            v.push(harita[i-11],harita[i-10],harita[i-1],harita[i+9],harita[i+10])
            for(let i = 0; i < v.length; i++){
                
                if(v[i] == "*") {
                    value += 1
                }
            }
            harita[i] = value;
        }

        //? ALT KENAR SAYILARI
        if(!(i == 71) && !(i == 80) && (i > 70) && !(harita[i] == "*")) {
            v.push(harita[i-1],harita[i-11],harita[i-10],harita[i-9],harita[i+1])
            for(let i = 0; i < v.length; i++){
                
                if(v[i] == "*") {
                    value += 1
                }
            }
            harita[i] = value;
        }

        //? ORTADAKİ SAYILAR
        if(!(i == 1) && !(i == 71) && !(i == 10) && !(i == 80) && !(i < 11) && !(i > 70) && 
        !(i%10 == 1) && !(i%10 == 0) && !(harita[i] == "*")) {
            v.push(harita[i-11],harita[i-10],harita[i-9],harita[i-1],
                harita[i+1],harita[i+9],harita[i+10],harita[i+11])
            for(let i = 0; i < v.length; i++){
                
                if(v[i] == "*") {
                    value += 1
                }
            }
            harita[i] = value;
        }

    }
}
numbers()



export {numbers,harita}