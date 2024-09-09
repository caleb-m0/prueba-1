function showQuestion() {
    const name = document.getElementById('name-input').value;
    if (name.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }
    document.getElementById('form-container').classList.add('d-none');
    document.getElementById('question-container').classList.remove('d-none');
    document.getElementById('question').innerText = `${name}, ¿te gusta mi página?`;
}

function showResponse(likesPage) {
    const responseImage = document.getElementById('response-image');
    if (likesPage) {
        responseImage.src = 'img/si.jpg'; // Imagen de risa
    } else {
        responseImage.src = 'img/no.jpg'; // Imagen de llanto
    }
    document.getElementById('question-container').classList.add('d-none');
    document.getElementById('response-container').classList.remove('d-none');
}
