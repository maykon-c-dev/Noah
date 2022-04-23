const fotos = [
    {
        id: 1,
        idade: 0,
        url: "imagens/IMG-20220319-WA0002.jpg",
    },
    {
        id: 1,
        idade: 0,
        url: "imagens/IMG-20220319-WA0003.jpg",
    },
    {
        id: 1,
        idade: 0,
        url: "imagens/IMG-20220319-WA0004.jpg" ,
    },
    {
        id: 1,
        idade: 0,
        url: "imagens/IMG-20220319-WA0005.jpg" ,
    },
    {
        id: 1,
        idade: 0,
        url: "imagens/IMG-20220319-WA0006.jpg" ,
    },
    {
        id: 1,
        idade: 0,
        url: "imagens/IMG-20220319-WA0007.jpg" ,
    },
    {
        id: 1,
        idade: 0,
        url: "imagens/IMG-20220322-WA0011.jpg" ,
    },
    {
        id: 1,
        idade: 0,
        url: "imagens/IMG-20220322-WA0012.jpg" ,
    },
    {
        id: 1,
        idade: 0,
        url: "imagens/IMG-20220323-WA0000.jpg" ,
    },
    {
        id: 1,
        idade: 0,
        url: "imagens/IMG-20220331-WA0016.jpg" ,
    },
    {
        id: 1,
        idade: 0,
        url: "imagens/IMG-20220331-WA0017.jpg" ,
    },
    {
        id: 1,
        idade: 0,
        url: "imagens/IMG-20220418-WA0004.jpg" ,
    }

]

function cars(){
    document.getElementById("container").style.backgroundImage = "url(assets/background_cars.jpg)" 
    document.body.style.setProperty('--cor-font-principal','yellow')
    document.body.style.setProperty('--font-principal','MagnetoB')
    document.body.style.setProperty('--border-container-cor','#161616')
    document.getElementById("banner_img").src = "assets/cars_banner1.png" 
    document.getElementById("centro_topo").style.color = "#F0270D"
    document.getElementById("centro_topo").style.fontSize = "max(15px, 11vw)"

    localStorage.setItem ('config', 'cars')
}

function dbz(){
    document.getElementById("container").style.backgroundImage = "" 
    document.body.style.setProperty('--cor-font-principal','')
    document.body.style.setProperty('--font-principal','Saiyan SansRegular')
    document.body.style.setProperty('--border-container-cor','rgba(255, 252, 252, 0.466)')
    document.getElementById("banner_img").src = "assets/dbz_banner.png"
    document.getElementById("centro_topo").style.color = "" 
    document.getElementById("centro_topo").style.fontSize = ""

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

function principal(event){   
    let fotoPrincipal = document.querySelector("div#foto_principal")
    let selecionada = event.target.src

    fotoPrincipal.innerHTML= ""

    var novaFoto = document.createElement("img")
    novaFoto.setAttribute ("src", selecionada)
    novaFoto.setAttribute ("id", "fotoAberta")
    fotoPrincipal.appendChild(novaFoto)    
}



const listaFotos = document.querySelector("ul.slider")

function galeria(colecaoFotos){
    let fotoPrincipal = document.querySelector("div#foto_principal")
    fotoPrincipal.innerHTML = `<img src="imagens/IMG-20220319-WA0006.jpg" alt="Noah Sorrindo">`
    listaFotos.innerHTML = ""

    colecaoFotos.forEach(function(foto){

        const template = criarTemplate(foto)

        listaFotos.appendChild(template)
    })
}

function criarTemplate(foto){
     
    const li = document.createElement("li")

    li.innerHTML= `<div class="fotos"><img src="${foto.url}" id="${foto.id}" onclick="principal(event)"></img></div>`

    return li
}
galeria(fotos)
