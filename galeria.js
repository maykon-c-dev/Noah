
function config(){
    let config = localStorage.getItem("config")

    if(config == "true"){
        document.getElementById("container").style.backgroundImage = "url(assets/dia.jpg)"  
        document.getElementById("container").style.color = "black" 
        document.querySelector("img").style.border = "solid 3px black"     
    }
}

