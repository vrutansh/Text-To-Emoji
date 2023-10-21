var clutter = ""

function encryption(){ //function for gettinf input and password
    document.querySelector("#encrypt-btn").addEventListener("click", function(){
       var input = document.getElementById("txtmsg").value
       console.log(input)

       var pass = document.getElementById("pwd").value
       console.log(pass)

        const str = input.split("")
        console.log(str)

        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}`
        });
        console.log(clutter)

        document.querySelector("#result").style.display = "block"
        document.querySelector("#result").innerHTML = clutter
    })

}
encryption()




function btnclicking(){ // function for the animation over encrypt and decrypt button
    document.querySelector("#dec-btn").addEventListener("click", function(){
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span i").style.rotate = "180deg"
    })

    document.querySelector("#enc-btn").addEventListener("click", function(){
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span i").style.rotate = "360deg"
    })
}

btnclicking();

