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
    }


]

function config(){
    let config = localStorage.getItem("config")

    if(config == "true"){
        document.getElementById("container").style.backgroundImage = "url(assets/dia.jpg)"  
        document.getElementById("container").style.color = "black" 
        document.querySelector("img").style.border = "solid 3px black"     
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
