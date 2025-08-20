// Por ID
let titulo = document.getElementById('titulo'); // Retorna 1 elemento

// Por selector CSS (primer coincidencia)
let parrafo = document.querySelector('.texto'); // Retorna 1 elemento

// Por selector CSS (todos los que coincidan)
let botones = document.querySelectorAll('button'); // Retorna NodeList

function updTitle() {
    let titulo = document.getElementById('titulo'); // Retorna 1 elemento
    titulo.innerHTML="Chau Dom"
}

function addElement() {
    let nuevoDiv = document.createElement('div'); // Crear elemento
    nuevoDiv.textContent = '¡Soy un nuevo Div!';
    nuevoDiv.style.backgroundColor="lightblue"
    nuevoDiv.style.padding="1rem"
    document.body.appendChild(nuevoDiv); // Agregar al final    

}



function updStyle() {
    let titulo = document.getElementById('titulo'); // Retorna 1 elemento
    titulo.style.backgroundColor="lightblue"
}


function removeBtn() {
    let btn1 = document.getElementById('btn1'); // Retorna 1 elemento
    btn1.remove();
}

function showDiv() {
    let div = document.querySelector('div[style="display: none;"]');
    if (div) {
        div.style.display = 'block';
    }
}