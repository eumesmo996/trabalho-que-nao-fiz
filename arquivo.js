const busca = document.getElementById('busca');
const feedback = document.getElementById('feedback');

if (busca) {
    busca.addEventListener('input', () => {
        if (busca.value.length > 0) {
            feedback.innerText = "Procurando por: " + busca.value;
        } else {
            feedback.innerText = "";
        }
    });
}