function funcTrue() {
    return true
}

function Promes() {
    return setTimeout(() => {
        console.log('Hola soy una promesa');
    }, 5000);
}

function idPar() {
    let i = 0
    while (true) {
        yield id += 2
    }
}