let respuesta = prompt("¿Porque la luna es mas grande que el sol?","porque sale de noche").toLowerCase()
let intentos=1
while (respuesta !== "porque sale de noche") {
    alert("Intenta de nuevo")
    intentos++
    respuesta = prompt("¿Porque la luna es mas grande que el sol?","porque sale de noche").toLowerCase()
}
alert("correcto! Lo hiciste en "+intentos+" intentos")