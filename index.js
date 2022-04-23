function cars(){
    var btn = document.getElementById("container")
    btn.style.backgroundImage = "url(assets/background_cars.jpg)" 
    document.body.style.setProperty('--cor-font-principal','yellow')
    document.body.style.setProperty('--font-principal','MagnetoB')
    document.body.style.setProperty('--border-container-cor','#161616')
    document.getElementById("games_img").src = "assets/cars_footer.png"
    document.getElementById("banner_img").src = "assets/cars_banner1.png" 
    document.getElementById("centro_topo").style.color = "#F0270D"
    document.getElementById("centro_topo").style.fontSize = "max(15px, 10vw)"
    document.getElementById("btndia").style.border = "solid 2px black"
    document.getElementById("btnnoite").style.border = "solid 2px black"

    localStorage.setItem ('config', 'cars')
}

function dbz(){
    document.getElementById("container").style.backgroundImage = "" 
    document.body.style.setProperty('--cor-font-principal','')
    document.body.style.setProperty('--font-principal','Saiyan SansRegular')
    document.body.style.setProperty('--border-container-cor','rgba(255, 252, 252, 0.466)')
    document.getElementById("games_img").src = "assets/dbz_footer.png"
    document.getElementById("banner_img").src = "assets/dbz_banner.png"
    document.getElementById("centro_topo").style.color = "" 
    document.getElementById("centro_topo").style.fontSize = ""
    document.getElementById("btndia").style.border = ""
    document.getElementById("btnnoite").style.border = ""

    localStorage.removeItem ('config')
}

function config(){
    let config = localStorage.getItem("config")
    if(config == "cars"){
        cars()
    }else{
        dbz()
    }
}