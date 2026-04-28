// Selecionando os modais
let registerModal = document.getElementById('registerModal');
let roomModal = document.getElementById('roomModal');
let loginModal = document.getElementById('loginModal');

// Selecionando a área onde vai aparecer os quartos
let roomsInfo = document.getElementById('roomsInfo');

// Função para abrir o registro
document.getElementById('btnRegister').onclick = function() {
    registerModal.style.display = 'block';
};

// Função para fechar o registro
document.getElementById('closeModal').onclick = function() {
    registerModal.style.display = 'none';
};

// Função para abrir o login
document.getElementById('btnLogin').onclick = function() {
    loginModal.style.display = 'block';
};

// Função para fechar o login
document.getElementById('closeLoginModal').onclick = function() {
    loginModal.style.display = 'none';
};

// Selecionando o modal de Sobre (Veja Mais)
let aboutModal = document.getElementById('aboutModal');

// Função para abrir o Veja Mais
document.getElementById('btnVejaMais').onclick = function() {
    aboutModal.style.display = 'block';
};

// Função para fechar o Veja Mais
document.getElementById('closeAboutModal').onclick = function() {
    aboutModal.style.display = 'none';
};

// Função para abrir os quartos
document.getElementById('btnRooms').onclick = function() {
    roomModal.style.display = 'block';
    
    // Vamos criar um texto (HTML) com todos os quadradinhos
    // 'flex-wrap: wrap' ajuda a quebrar a linha quando os quadrados chegam no canto
    let htmlDosQuartos = "<div style='display: flex; flex-wrap: wrap; gap: 5px; justify-content: center;'>";
    
    // Um simples loop (repetição) que conta de 1 a 100
    for (let numeroDoQuarto = 1; numeroDoQuarto <= 100; numeroDoQuarto++) {
        
        // Vamos dizer que os quartos que são divisíveis por 4 (como 4, 8, 12) estão ocupados
        let corDeFundo = "green"; // padrão: verde
        let titulo = "Disponível";
        
        if (numeroDoQuarto % 4 === 0 || numeroDoQuarto === 7 || numeroDoQuarto === 13) {
            corDeFundo = "red"; // se cair na regra, fica vermelho
            titulo = "Ocupado";
        }

        // Adicionando o quadradinho no nosso texto HTML
        htmlDosQuartos += "<div title='" + titulo + "' style='width: 32px; height: 32px; background-color: " + corDeFundo + "; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; border-radius: 4px; font-weight: bold; cursor: help;'>" + numeroDoQuarto + "</div>";
    }
    
    htmlDosQuartos += "</div>"; // Fecha a caixa principal
    
    // Joga os 100 quadrados dentro da janelinha
    roomsInfo.innerHTML = htmlDosQuartos;
};

// Função para fechar os quartos
document.getElementById('closeRoom').onclick = function() {
    roomModal.style.display = 'none';
};

// Fechar modais ao clicar fora
window.onclick = function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = 'none';
    }
    if (event.target == roomModal) {
        roomModal.style.display = 'none';
    }
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
};

// Cadastro do Hóspede
document.getElementById('registerForm').onsubmit = function(event) {
    event.preventDefault(); // Não recarrega a página
    let name = document.getElementById('name').value;
    alert("O hóspede " + name + " foi cadastrado com sucesso!");
    document.getElementById('registerForm').reset();
    registerModal.style.display = 'none';
};

// Login
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); // Não recarrega a página
    let email = document.getElementById('loginEmail').value;
    alert("Bem-vindo(a) de volta! Você entrou com o email: " + email);
    document.getElementById('loginForm').reset();
    loginModal.style.display = 'none';
};
