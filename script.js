const text = document.querySelector("#txtmsg")
const passw = document.querySelector("#pwd")
const result = document.querySelector("#result")
var clutter = ""

function encryption(){ //function for gettinf input and password
    document.querySelector("#encrypt-btn").addEventListener("click", function() {
       var input = document.getElementById("txtmsg").value
       //console.log(input)

       var pass = document.getElementById("pwd").value
       ///console.log(pass)

        //converting it into emojis
        var str = input.split("")
        str.forEach(element => {
            clutter += `&#128${(element.charCodeAt())} `
        });
        //console.log(clutter)

       
        document.querySelector("#result").innerHTML = clutter

        var datarr = [];
        //checking the data and pushing it to local stroage
        if(JSON.parse(localStorage.getItem('data1'))){
            datarr = JSON.parse(localStorage.getItem('data1'))
            datarr.push({"pass":pass, "input":input, "clutter":clutter})
        }else{
            datarr = [{"pass":pass, "input":input, "clutter":clutter}]
        }
         
        // console.log(data)
        localStorage.setItem('data1', JSON.stringify(datarr))
    })

}


function decryption() {
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
        var clutter2 = '';
        var input2 = document.querySelector("#emojimsg").value
        var finalPass = document.querySelector("#finalpwd").value
        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)
        var str2 = input2.split(" ")
        str2.forEach(element => {
                clutter2 += `&#${(element.codePointAt(0))} `
                // console.log((element.charCodeAt()) * Math.floor(Math.random() * 10))
        });
        console.log(clutter2)
        var found;
        for(let i of user){
            if(i.clutter == clutter2){
                found = i;
                console.log(i)
            }
        }
        if (found.clutter === clutter2) {
            console.log("jay ho")
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `#eee`

            document.querySelector("#result").innerHTML = found.input
        } else {
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `red`
            document.querySelector("#result").innerHTML = "Wrong password!"
        }
    })

}



function btnclicking(){ // function for the animation over encrypt and decrypt button

    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
        // console.log(localStorage.getItem("password"))
        // console.log(localStorage.getItem("emojis"))
    })

    document.querySelector("#dec-btn").addEventListener("click", function(){
        document.querySelector("#result").style.display = "none"
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span i").style.rotate = "180deg"
    })

    document.querySelector("#enc-btn").addEventListener("click", function(){
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#result").style.display = "none"
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#main>h1 span i").style.rotate = "360deg"
        
    })

    document.querySelector("#encrypt-btn").addEventListener("click", function(){
        document.querySelector("#result").style.display = "block"
    })

    document.querySelector("#decrypt-btn").addEventListener("click", function(){
        document.querySelector("#result").style.display = "block"
    })

}


encryption()

decryption()

btnclicking();