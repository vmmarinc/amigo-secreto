// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); //Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array y actualizar la lista
    amigos.push(nombre);
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista de amigos en la UI
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista

    //Iterar sobre el array y crear elementos <li> para cada amigo
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Debe agregar al menos un amigo para sortear.");
        return;
    }

    // Generar índice aleatorio y obtener el nombre
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la UI
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo secreto: <strong>${amigoSorteado}</strong> 🎉</li>`;
}