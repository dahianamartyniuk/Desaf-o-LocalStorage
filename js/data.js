document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("data");    // constante que guarda todos los elementos con el id = data, que esdonde se escribe algún dato para que luego sea guardado en el localstorage
    const valorAlmacenado = localStorage.getItem("userInput"); // Obtiene el valor del localStorage

    if (valorAlmacenado) {    
        data.textContent = valorAlmacenado; // Muestra el valor en el lugar donde se guardan - en pantalla
    } else {
        data.textContent = "No se ha ingresado ningún dato.";
    }
});

//En terminos generales se trata de guardar en el local storage el dato guardado, en la pantalla data.html 