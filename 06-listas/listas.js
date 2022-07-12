const compras = ["Pan", "Leche", "Azucar", "Manteca", "Carne"]

compras.push("Aceite de Girasol");
compras.pop()


const pelisFavoritos = [
    {
        titulo: "Avengers",
        director: "Joe Russo",
        fecha: new Date(2008, 7,1)
    },
    {
        titulo: "Jurassic World: Dominion",
        director: "Colin Trevorrow",
        fecha: (2022,6,10)
    },
    {
        titulo: "Spider-Man: No Way Home",
        director: "Jon Watts",
        fecha: new Date(2021, 11, 16)
    }
]

const peliposteriores = pelisFavoritos.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

const directores = pelisFavoritos.map(pelicula => {
    return pelicula.director
})

const titulos = pelisFavoritos.map(pelicula => {
    return pelicula.titulo
})

const director_titulo = directores.concat(titulos)
const director_titulo_pr = [...directores, ...titulos]