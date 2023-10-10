
// Configure o caminho para o arquivo de animação JSON do LottieFiles
const animationPath = 'https://lottie.host/de429f84-e62f-40af-a109-de5ab6af24f7/P5wcANaTnx.json';

// Obtenha uma referência para o botão WhatsApp
const whatsappButton = document.getElementById('whatsapp-button');

// Carregue a animação do LottieFiles
bodymovin.loadAnimation({
    container: whatsappButton,
    // renderer: 'svg', // ou 'canvas'
    // loop: false, // Defina como true se desejar que a animação se repita
    // autoplay: true,
    path: animationPath // Especifique o caminho para o arquivo JSON da animação
});

// Adicione um evento de clique ao botão WhatsApp para abrir o link do WhatsApp
whatsappButton.addEventListener('click', function() {
    window.location.href = 'https://api.whatsapp.com/send?phone=SEU-NUMERO-DE-TELEFONE';
});
