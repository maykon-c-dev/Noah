const videos = [
    {
        id: 1,
        idade: 0,
        url: "videos/VID-20220319-WA0008.mp4",
    },
    {
        id: 1,
        idade: 0,
        url: "videos/VID-20220411-WA0014.mp4",
    },
    {
        id: 1,
        idade: 0,
        url: "videos/VID-20220415-WA0001.mp4" ,
    },
    {
        id: 1,
        idade: 0,
        url: "videos/noah.mp4" ,
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



const listaVideos = document.querySelector("ul.slider")

function galeria(colecaoVideos){
   
    colecaoVideos.forEach(function(video){

        const template = criarTemplate(video)

        listaVideos.appendChild(template)
    })
}
galeria(videos)


function criarTemplate(video){
     
    const li = document.createElement("li")

    li.innerHTML= `<div class="videos"><video src="${video.url}" id="${video.id}" controls></videos></div>`

    return li
}

