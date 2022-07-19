const boton = document.querySelector("button")

boton.addEventListener(() => alert("Se hizo clic en el botón"))

$("button").click(function(){
    console.log("Hola, estoy utilizando jQuery")
})