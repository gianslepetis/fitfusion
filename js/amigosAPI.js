var sesion = localStorage.getItem("sesion_iniciada")

if (sesion == 0 || sesion == null) {

} else {

    let amigosAPI = `<section id="misc">
    <div class="container">
        <h1>Conecta y haz amigos para compartir tus entrenamientos</h1>
    </div>
    </section>
    
    <section id="features">
    <div class="container">
        <div class="explore">`

    async function consultar() {

        let resultado = await fetch('https://randomuser.me/api/?results=8&inc=name,picture,location,age')
            .then(response => response.json())
            .then(data => data)
        console.log(resultado)

        for (let elemento of resultado.results) {
            amigosAPI = amigosAPI + `<div class="friend">
                                    <img src=${elemento.picture.large}>
                                    <h3>${elemento.name.first + " " + elemento.name.last}</h3>
                                    <p>${elemento.location.city + ", " + elemento.location.country}</p><br>
                                    <button style="padding:8px 20px; position:center">Conectar</button>
                               </div>
                            `
            console.log(amigosAPI)
        }
        document.querySelector("main").innerHTML = amigosAPI

    }

    consultar()
}
