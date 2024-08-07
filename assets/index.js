// script.js

// Inicializar el arreglo con las tareas existentes
let tareas = ["Pintar la fachada de la casa", "Pagar la tarjeta de crédito", "Bañar al perro"];

// Obtener los elementos del DOM que necesitaremos
const formularioTarea = document.getElementById('formulario-tarea');
const btnMostrarFormulario = document.getElementById('mostrar-formulario');
const btnAgregarTarea = document.getElementById('agregar-tarea');
const inputNuevaTarea = document.getElementById('nueva-tarea');
const listaTareas = document.getElementById('lista-tareas');

// Mostrar y ocultar el formulario de agregar tarea
btnMostrarFormulario.addEventListener('click', () => {
    formularioTarea.classList.toggle('formulario-oculto');
});

// Agregar nueva tarea
btnAgregarTarea.addEventListener('click', () => {
    const nuevaTarea = inputNuevaTarea.value.trim();

    if (nuevaTarea !== '') {
        // Añadir la nueva tarea al arreglo de tareas
        tareas.push(nuevaTarea);

        // Limpiar el campo de entrada
        inputNuevaTarea.value = '';

        // Ocultar el formulario de agregar tarea
        formularioTarea.classList.add('formulario-oculto');

        // Actualizar la lista de tareas en la tabla
        actualizarListaTareas();
    }
});

// Función para actualizar la lista de tareas en la tabla
function actualizarListaTareas() {
    // Limpiar la lista de tareas actual
    listaTareas.innerHTML = '';

    // Recorrer el arreglo de tareas y crear las filas de la tabla
    tareas.forEach((tarea, index) => {
        const fila = document.createElement('tr');

        // Columna de la tarea
        const colTarea = document.createElement('td');
        colTarea.textContent = tarea;
        fila.appendChild(colTarea);

        // Columna de botón "Finalizar"
        const colFinalizar = document.createElement('td');
        const btnFinalizar = document.createElement('button');
        btnFinalizar.textContent = 'Finalizar';
        btnFinalizar.classList.add('btn-finalizar');
        btnFinalizar.addEventListener('click', () => finalizarTarea(index));
        colFinalizar.appendChild(btnFinalizar);
        fila.appendChild(colFinalizar);

        // Agregar la fila a la tabla
        listaTareas.appendChild(fila);
    });
}

// Función para eliminar una tarea de la lista
function finalizarTarea(index) {
    // Eliminar la tarea del arreglo según su índice
    tareas.splice(index, 1);

    // Actualizar la lista de tareas en la tabla
    actualizarListaTareas();
}

// Llamar a la función para mostrar las tareas iniciales cuando la página se carga
actualizarListaTareas();
