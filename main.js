today = yyyy +'-'+ mm +'-'+ dd;
document.getElementById("fecha")

function registro(){
    // // Crea las etiquetas con los datos
     var tr = document.createElement("tr")
     var nombre = document.createElement("td")
     var id = document.createElement("td")
     var fecha = document.createElement("td")
     var correo = document.createElement("td")
     var numero = document.createElement("td")
     var region = document.createElement("td")
     var ciudad = document.createElement("td")
     var vivienda = document.createElement("td")

    // Ingresa los datos en las etiquetas correspondientes
    nombre.innerHTML = document.getElementById("nombre").value
    id.innerHTML = document.getElementById("id").value
    fecha.innerHTML = document.getElementById("fecha").value
    correo.innerHTML = document.getElementById("correo").value
    numero.innerHTML = document.getElementById("numero").value
    region.innerHTML = document.getElementById("region").value
    ciudad.innerHTML = document.getElementById("ciudad").value
    vivienda.innerHTML = document.getElementById("vivienda").value

    if(nombre.value.split('').length){
        nombre.innerHTML ="nombre completo"
    }
    
}
function modifyText() {
    var letters = 
                [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", 
                    "v", "w", "x", "y", "z", ",", ".", "!", "'", "$", "%", "&",
                    "/", "(", ")", "=", "?", "¿", "¡", ".", ","
                ]
    var txtRut = document.getElementById("txtRut")
    txtRut.value = txtRut.value.toLowerCase()
    for(let i in letters){
        txtRut.value = txtRut.value.replace(letters[i], "")
    }
    if(txtRut.value.includes("-")) {
        txtRut.value = txtRut.value.replace(/-/g, "")
        txtRut.value = txtRut.value.slice(0, txtRut.value.length - 1) + "-" + txtRut.value.slice(txtRut.value.length - 1)
    }else
    {
        txtRut.value = txtRut.value.slice(0, txtRut.value.length - 1) + "-" + txtRut.value.slice(txtRut.value.length - 1)
    }
    if(txtRut.value.includes("k")) {
        txtRut.value = txtRut.value.replace(/k/g, "")
        txtRut.value += "k"
    }
}


