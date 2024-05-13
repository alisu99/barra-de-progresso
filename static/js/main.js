// Função para fazer a requisição AJAX e atualizar dinamicamente o número de progresso e a barra de progresso
function atualizarProgresso() {
    // Faz a requisição AJAX para a rota /progresso
    fetch('/progresso')
        .then(response => response.json())
        .then(data => {
            // Atualiza os valores exibidos na tela com base nos dados obtidos
            const novoProgresso = data.progresso;
            const progresso1 = document.getElementById("progresso1");
            progresso1.textContent = novoProgresso + "%";


            // Atualiza o dashoffset dos círculos
            const circle = document.querySelector(".progress-circle .progress-bar");
            const circumference = 2 * Math.PI * 60; // Circunferência do círculo (raio = 60)
            const offset = circumference * (1 - novoProgresso / 100); // Offset para representar o progresso
            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = offset;
        })
        .catch(error => {
            console.error('Erro ao obter o número de progresso:', error);
        });
}

// Chama a função de atualização de progresso ao carregar a página
window.onload = atualizarProgresso;