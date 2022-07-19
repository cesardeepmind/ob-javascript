const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", (e) => {
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText);
        parrafo.classList.add("draggind")
        e.dataTransfer.setData("id", parrafo.id)
        const elementoFantasma = document.querySelector(".image-fantasma")
        e.dataTransfer.setDragImage(elementoFantasma, 0, 0)
    })
    
    parrafo.addEventListener("dragend", () => {
        console.log("Ha terminado");
        parrafo.classList.remove("draggind")
    })
});

secciones.forEach(seccion => {
    seccion.addEventListener("dragover",  (e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect= "move"
        // console.log("Drag over");
    })

    seccion.addEventListener("drop", (e) => {
        console.log("drop");
        const idParrafo = e.dataTransfer.getData("id")
        // console.log(idParrafo);
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo)
    })
})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", e => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", e => {
    const idParrafo = e.dataTransfer.getData("id")
    document.getElementById(idParrafo).remove()
})