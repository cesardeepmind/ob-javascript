class Estudiante {
    nombre = "Cesar"
    asignaturas = ["HTML","CSS","JS"]

    obtenDatos(){
        return{
            nombre: this.nombre,
            asignatura: this.asignaturas
        }
    }
}

const estudiante = new Estudiante()

console.log(estudiante.obtenDatos())