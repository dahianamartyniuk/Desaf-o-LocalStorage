document.addEventListener("DOMContentLoaded", () => {       //DOMContentLoaded asegura de que alguna modificación o cambio en el DOM sea cargado después de que se carguen todos los elementos html
    const inputText = document.getElementById("inputText");   // constante del campo que va a contener texto donde se refiere a todos los elementos del DOM con id = inputText 
    const buttonText = document.getElementById("buttonText"); // constante del botón que se usa para guardar lo del campo de texto, donde se refiere a todos los elementos del DOM con id = buttonText 

    buttonText.addEventListener("click", () => {     //agrega un control de eventos cuando se haga click en el botón 
        const textValue = inputText.value; // Obtiene el valor del input
        localStorage.setItem("userInput", textValue); // Guarda el valor en localStorage
        //alert("Dato guardado en localStorage!");
    });
});

//En breves palabras lo que se hace en la sección index.js es realizar los eventos para que cuando se haga click en el botón guardar ese dato ingresado se muestre en el data.html