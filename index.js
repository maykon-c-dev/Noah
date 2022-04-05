function dia(){
    var btn = document.getElementById("container")
    btn.style.backgroundImage = "url(assets/dia.jpg)" 
    document.getElementById("container").style.color = "black" 
    document.getElementById("container").style.color = "#cccccc" 
    document.getElementById("centro_topo").style.color = "rgb(117, 104, 126)"
    document.getElementById("btndia").style.border = "solid 2px black"
    document.getElementById("btnnoite").style.border = "solid 2px black"

    localStorage.setItem ('config', 'true')
}

function noite(){
    document.getElementById("container").style.backgroundImage = "" 
    document.getElementById("container").style.color = "" 
    document.getElementById("centro_topo").style.color = "" 
    document.getElementById("btndia").style.border = ""
    document.getElementById("btnnoite").style.border = ""

    localStorage.removeItem ('config')
    localStorage.removeItem ('dia')

}
function config(){
    let config = localStorage.getItem("config")
    if(config == "true"){
        dia()
    }else{
        noite()
    }
}