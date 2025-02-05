const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
let amigos = [];

function adicionarAmigo() {
    const nome = inputAmigo.value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    if (!amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        inputAmigo.value = "";
    }
}

function atualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        resultado.textContent = "Adicione pelo menos um amigo para sortear.";
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    listaAmigos.innerHTML = "";
    resultado.innerHTML = `<p>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></p>`;
}

function limparListaDeAmigos() {
    amigos = [];
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
}
