let tareas = [
    { id: 1707881990291, nombre: "Hacer mercado", estado: true },
    { id: 1707881993279, nombre: "Estudiar para la prueba", estado: false },
    { id: 1707881993734, nombre: "Sacar a pasear a Tobby", estado: false }
];

const listaDeTareas = document.querySelector("#tareas")
const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const totalTareas = document.querySelector("#cuenta-tareas")
const totalTareasRealizadas = document.querySelector("#cuenta-tareas-realizadas")

let totalRealizadas = 0
totalRealizadas = tareas.filter(tarea => tarea.estado == true)
let html = "";
let table = "<table>";
table += "<tr><th>ID</th><th>Nombre</th><th>Estado</th><th>Eliminar</th><th>Marcar como realizada</th></tr>";
for (let tarea of tareas) {
    // if(tarea.estado == true){status = "Realizada"}else{status  = "Pendiente"}
    table += `<tr><td>${tarea.id}</td><td>${tarea.nombre}</td><td>${tarea.estado ? "Realizada" : "Pendiente"}</td><td><button onclick="borrar(${tarea.id})"> eliminar </button></td><td><button onclick="cambiar(${tarea.id})"> marcar </button></td></tr>`;
}
table += "</table>";
html += table;
listaDeTareas.innerHTML = html;
totalTareas.innerHTML = tareas.length
totalTareasRealizadas.innerHTML = totalRealizadas.length


function agregar() {
    if(tareaInput.value != ""){
    const nombreTarea = tareaInput.value;
    const nuevaTarea = {
        id: Date.now(),
        nombre: nombreTarea,
        estado: false
    };
    tareas.push(nuevaTarea);
    tareaInput.value = "";
    let html = "";
    let table = "<table>";
    table += "<tr><th>ID</th><th>Nombre</th><th>Estado</th><th>Eliminar</th><th>Marcar como realizada</th></tr>";
    for (let tarea of tareas) {
        table += `<tr><td>${tarea.id}</td><td>${tarea.nombre}</td><td>${tarea.estado ? "Realizada" : "Pendiente"}</td><td><button onclick="borrar(${tarea.id})"> eliminar </button></td><td><button onclick="cambiar(${tarea.id})"> marcar </button></td></tr>`;
    }
    table += "</table>";
    html += table;
    listaDeTareas.innerHTML = html;
    totalTareas.innerHTML = tareas.length
    totalRealizadas = tareas.filter(tarea => tarea.estado == true)
    totalTareasRealizadas.innerHTML = totalRealizadas.length
}else {alert("Debes agregar un nombre a la tarea")}
}

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    let html = "";
    let table = "<table>";
    table += "<tr><th>ID</th><th>Nombre</th><th>Estado</th><th>Eliminar</th><th>Marcar como realizada</th></tr>";
    for (let tarea of tareas) {
        table += `<tr><td>${tarea.id}</td><td>${tarea.nombre}</td><td>${tarea.estado ? "Realizada" : "Pendiente"}</td><td><button onclick="borrar(${tarea.id})"> eliminar </button></td><td><button onclick="cambiar(${tarea.id})"> marcar </button></td></tr>`;
    }
    table += "</table>";
    html += table;
    listaDeTareas.innerHTML = html;
    totalTareas.innerHTML = tareas.length
    totalRealizadas = tareas.filter(tarea => tarea.estado == true)
    totalTareasRealizadas.innerHTML = totalRealizadas.length
}

function cambiar(id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    if(tareas[index].estado == "true"){
        tareas[index].estado = false
    }else{
        tareas[index].estado = true
    }
    let html = "";
    let table = "<table>";
    table += "<tr><th>ID</th><th>Nombre</th><th>Estado</th><th>Eliminar</th><th>Marcar como realizada</th></tr>";
    for (let tarea of tareas) {
        table += `<tr><td>${tarea.id}</td><td>${tarea.nombre}</td><td>${tarea.estado ? "Realizada" : "Pendiente"}</td><td><button onclick="borrar(${tarea.id})"> eliminar </button></td><td><button onclick="cambiar(${tarea.id})"> marcar </button></td></tr>`;
    }
    table += "</table>";
    html += table;
    listaDeTareas.innerHTML = html;
    totalRealizadas = tareas.filter(tarea => tarea.estado == true)
    totalTareasRealizadas.innerHTML = totalRealizadas.length
}