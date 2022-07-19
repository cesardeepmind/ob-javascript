const nombre = "Cesar"
const apellido = "Torres"

const datosPersonales = {
    nombre,
    apellido
}

sessionStorage.setItem("datos", JSON.stringify(datosPersonales))
localStorage.setItem("datos", JSON.stringify(datosPersonales))

document.cookie = `datos=${JSON.stringify(datosPersonales)};expires=${new Date(new Date().getTime() + 2 * 60000)}`
