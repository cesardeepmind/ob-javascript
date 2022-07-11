// Una cadena de texto con tu Nombre
const nombre = 'Cesar';

// Otra cadena de texto con tu Apellido
const apellido = 'Torres';

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estudiante = nombre + apellido;

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudianteMayus = estudiante.toUpperCase;

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const estudianteMinus = estudiante.toLowerCase

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const lengthEstudiante = estudiante.length

// Una variable que contenga la primera letra del Nombre
const primeraLetra = nombre[0]

// Otra variable que contenga la última letra del Apellido
const ultimaApellido = apellido[apellido.length - 1]

// Una cadena de texto que elimine los espacios de la variable "estudiante"
const sinEspacio = estudiante.replace(" ", "")

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const nombreEnEstudiante = estudiante.includes(nombre)



