const boton = document.querySelector('button');
const input = document.querySelector('input');
const contenedorTareas = document.getElementById('contenedor-tareas');

boton.addEventListener('click', agregarTarea)
input.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    agregarTarea()
  }
})

function agregarTarea() {
  if (input.value) {
    
    // Crear tarea    
    let tarea = document.createElement('div')
    tarea.classList.add('tarea')

    //agrega el texto de la tarea segun el texto que se ingrese en el input
    let texto = document.createElement('p')
    texto.textContent = input.value
    tarea.appendChild(texto)

    //crea lugar para guardar los botones de funcionalidad
    let contenedorBotones = document.createElement('div')
    contenedorBotones.classList.add('contenedor-botones')
    tarea.appendChild(contenedorBotones)

    //agrega los botones de funcionalidad
    let completar = document.createElement('button')
    completar.innerText = 'Completar'
    completar.classList.add('bonito')
    completar.addEventListener('click', completarTarea)
    
    let eliminar = document.createElement('button')
    eliminar.innerText = 'Eliminar'
    eliminar.classList.add('bonito')
    eliminar.addEventListener('click', eliminarTarea)

    contenedorBotones.append(completar, eliminar)

    //guarda las tareas en la lista de tareas
    contenedorTareas.appendChild(tarea)

  } else {
    alert ('ingrese una tarea por favor')
  }
}

function completarTarea (e) {
  let tarea = e.target.parentNode.parentNode
  tarea.classList.toggle('completada')
}

function eliminarTarea (e) {
  let tarea = e.target.parentNode.parentNode
  tarea.remove()
}


