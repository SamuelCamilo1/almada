document.getElementById('almadaPhoto').addEventListener('click', function() {
    var music = document.getElementById('almadaMusic');
    music.play().catch(function(error) {
        console.error("Erro ao reproduzir música:", error);
    });

    // Chamar a função para criar símbolos caindo
    createFallingSymbols();
});

function createFallingSymbols() {
    const fallingSymbolsContainer = document.getElementById('fallingSymbols');
    const symbolUrl = 'img/botaimg-removebg-preview.png'; // Substitua pela URL do logo do Botafogo

    for (let i = 0; i < 10; i++) { // Número de símbolos que vão cair
        const symbol = document.createElement('div');
        symbol.className = 'symbol'; // Adiciona a classe para estilização

        const img = document.createElement('img');
        img.src = symbolUrl;
        img.style.width = '100%'; // Faz a imagem preencher a bolinha
        img.style.height = '100%'; // Faz a imagem preencher a bolinha

        symbol.appendChild(img);
        symbol.style.left = `${Math.random() * 100}vw`; // Posição aleatória na largura da tela
        symbol.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duração aleatória da animação

        fallingSymbolsContainer.appendChild(symbol);

        // Remover o símbolo após a animação
        symbol.addEventListener('animationend', () => {
            symbol.remove();
        });
    }
}
