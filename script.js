var clutter = ""

function encryption(){ //function for gettinf input and password
    document.querySelector("#encrypt-btn").addEventListener("click", function(){
       var input = document.getElementById("txtmsg").value
       //console.log(input)

       var pass = document.getElementById("pwd").value
       ///console.log(pass)

        const str = input.split("")
        //console.log(str)

        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()} `
        });
        //console.log(clutter)

       
        document.querySelector("#result").innerHTML = clutter

        var datarr = [];
        //checking the data and pushing it to local stroage
        if(JSON.parse(localStorage.getItem('data1'))){
            datarr.JSON.parse(localStorage.getItem('data1'))
            datarr.push({"pass":pass, "input":input, "clutter":clutter})
        }else{
            datarr = [{"pass":pass, "input":input, "clutter":clutter}]
        }
         
        // console.log(data)
        localStorage.setItem('data1', JSON.stringify(datarr))
    })

}
encryption()


function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click", function(){
        var clutter2 = ""
        //getting input emoji message
        var input2 = document.querySelector("#emojimsg").value

        var pass = document.querySelector("#finalpwd").value
        // taking stored data from local storage
        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)

        var str2 = input2.split(" ")

        str2.forEach(element =>{
            clutter2 += `&#${(element.charCodeAt(0))}`
        })
        console.log(clutter2)

        var found;
        for(let i of user){
            if(i.clutter == clutter2){
                found = i;
                console.log(i)
            }
        }

        if(found.clutter === clutter2){
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.color = "#eee"

            document.querySelector("#result").innerHTML = found.input
        }
        else{
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.color = "yellow"
            document.querySelector("#result").innerHTML = "Wrong Password"
        }

    })
}

decryption()



function btnclicking(){ // function for the animation over encrypt and decrypt button
    document.querySelector("#dec-btn").addEventListener("click", function(){
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#result").style.display = "none"
        document.querySelector("#main>h1 span i").style.rotate = "180deg"
    })

    document.querySelector("#enc-btn").addEventListener("click", function(){
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span i").style.rotate = "360deg"
        document.querySelector("#result").style.display = "none"
    })

    document.querySelector("#encrypt-btn").addEventListener("click", function(){
        document.querySelector("#result").style.display = "block"
    })

    document.querySelector("#decrypt-btn").addEventListener("click", function(){
        document.querySelector("#result").style.display = "block"
    })

}

btnclicking();

