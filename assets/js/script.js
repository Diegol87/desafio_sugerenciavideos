class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get getUrl() {
        return this._url;
    }

    setInicio() {

    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    get getId() {
        return this._id;
    }

    playMultimedia() {
        iffeGlobal.mostrarIframe(this._url, this._id)
    }

    setInicio(tiempo) {
        iffeGlobal.agregarInicio(this._url, this._id, tiempo)
    }
}

let videoId = document.querySelector("#musica");
let peliculaId = document.querySelector("#peliculas");
let serieId = document.querySelector("#series");

let iframeMusica = new Reproductor("https://www.youtube.com/embed/2qDou8eHXGQ", videoId);
let iframePelicula = new Reproductor("https://www.youtube.com/embed/0WVDKZJkGlY", peliculaId);
let iframeSerie = new Reproductor("https://www.youtube.com/embed/Mj4_xG5NXeo", serieId)

let iffeGlobal = (() => {
    return {
        mostrarIframe(url, iframe) {
            iframe.setAttribute("src", url);
        },

        agregarInicio(url, iframe, tiempo) {
            iframe.setAttribute("src", `${url}?start=${tiempo}`)
        }
    }
})()

//recomiendo el coro de la canción en el segundo 50 
iframeMusica.setInicio()
iframePelicula.setInicio()
iframeSerie.setInicio()
