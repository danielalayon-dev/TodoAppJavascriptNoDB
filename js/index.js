document.addEventListener('DOMContentLoaded', () => {
    //Obtencion elementos
    const boton = document.querySelector('.myBtn');
    let contador = 0;
    const elementos = document.querySelector('.lista-elementos');
    function add() {
        let elemento = document.querySelector('.elemento').value;
        if (elemento.length > 0) {
            let li = document.createElement('li');
            li.id = contador++;
            li.innerHTML =
                contador +
                ') ' +
                elemento +
                "<span class='eliminar-elemento' onclick='eliminar(this)'> Eliminar </span>";
            elementos.appendChild(li);
        } else {
            alert('El elemento esta vacio');
        }
    }
    function eliminar(elemento) {
        var id = elemento.parentNode.getAttribute('id');
        node = document.getElementById(id);
        node.parentNode.removeChild(node);
    }
    boton.onclick = add;
});
