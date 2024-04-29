const form = document.getElementById('form-submeter');

function validaCampo(campoB){
    const campoAarray = campoB.split (' ');
    return campoAarray.length < 2

}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoB = document.getElementById('valor-do-campo-B');
    if (!validaCampo(campoB.value)) {
        alert('O número inserido no Campo "B" é menor do que o Número inserido no Campo "A"')
    }
})

console.log(form);



