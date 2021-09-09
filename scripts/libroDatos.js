//CAMBIAR ATRIBUTOS DEL ARRAY CON LOS QUE CORRESPONDAN EN NUESTRO JSON

var arrayDatos = [];
function showLibro(array) {
    let libro = "";
    let fotos = "";
    libro += `
    <h2> <strong>${array.name} </strong></h2><br>           
    <p> ${array.description} </p><br><p>${array.category}</p>
    <div>${fotos}</div><br>
    <p>Precio: ${array.cost} ${array.currency} </p>
    `
    fotos += `
    <img class="img" src="img/${array.name}/1.jfif>" 
    <img class="img" src="img/${array.name}/2.jfif>"
    <img class="img" src="img/${array.name}/3.jfif>"
    `


    document.getElementById("listadoDatos").innerHTML += libro;
    document.getElementById("listadoDatos").innerHTML += fotos;
}




document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(LIBROS_DATOS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            arrayDatos = resultObj.data;
            
            for (let i = 0; i < arrayDatos.length; i++) {
                console.log(localStorage.getItem("Id"), " ", arrayDatos[i].id)
                if(arrayDatos[i].id=== localStorage.getItem("Id")){
                   array = arrayDatos;
                   console.log("hola")
                    showLibro(arrayDatos);
                }
            }
        }
    })
});
