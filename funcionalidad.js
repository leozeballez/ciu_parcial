var celda;

function celda(id_celda) {
    celda = id_celda;
    document.getElementById(celda);
}

function aumentar(id_celda) {
    let valor = parseInt(celda(id_celda).textContent);
    document.getElementById(celda).textContent = valor + 1;
}

//Las funciones aumentar() y disminuir() funcionan correctamente; el problema es que no sé como pasarle el id por parametro a las funciones.
//Colocando directamente un id existente dentro del 'document.getElementById()', hace que el boton sumar, sume y que el boton disminuir, reste correctamente.

function disminuir(id_celda) {
    let valor = parseInt(celda(id_celda).textContent);
    celda(id_celda).textContent = valor -1 < 0 ? 0 : valor-1;
}

function porcentajeVisto(id_celda1, id_celda2, id_celda3) {
    let temporadasTotales = parseInt(celda(id_celda1).textContent);
    let temporadasVistas = parseInt(celda(id_celda2).textContent);
    celda(id_celda3).textContent = (temporadasVistas * 100) / temporadasTotales;
}

function seleccionarFila(id_fila) {
    var fila = document.querySelector(id_fila);
    fila.classList.add("fila_seleccionada");
    //fila.classList.toggle('fila_seleccionada');
}

//El 'seleccionarFila(id)' debería cambiar el color de fondo de una fila seleccionada, pero intenté agregarle esto a un 'onclick' dentro de los tags "td" y "tr" y no funcionó.