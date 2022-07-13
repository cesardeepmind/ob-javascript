const datosPersonales = {
    nombre: "Cesar",
    apellido: "Torres",
    edad: "28",
    altura: "1.68",
    eresDesarrollador: true
}

const miEdad = datosPersonales.edad;
console.log(miEdad);

const lista = [
    {
        ...datosPersonales
    },{
        nombre: "Adri",
        apellido: "Rojas",
        edad: 25,
        altura: 180,
        eresDesarrollador: false
    },{
        nombre: "Eli",
        apellido: "Cortazar",
        edad: 30,
        altura: 164,
        eresDesarrollador: false
    }
]

const listOrdenada = lista.sort((a,b) => b.edad - a.edad);

console.log(listOrdenada);