// Importa apenas os módulos necessários do Firebase v11+
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
    from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Pega a instância de autenticação do Firebase já inicializado no firebaseconfig.js
const auth = getAuth();

// === Cadastro ===
const registerForm = document.querySelector("#register-form form");
registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;

    if (!name || !email || !password || !confirmPassword) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert(`Conta criada com sucesso! Bem-vindo(a), ${name}`);
        registerForm.reset();
    } catch (error) {
        console.error("Erro no cadastro:", error);
        alert("Erro Firebase: " + error.message);
    }
});

// === Login ===
const loginForm = document.querySelector("#login-form form");
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    try {
        const user = await createUserWithEmailAndPassword(auth, email, senha);
        alert("Usuário cadastrado com sucesso: " + user.user.email);
        window.location.href = "index.html"; // redireciona após cadastro
      } catch (error) {
        alert("Erro no cadastro: " + error.message);
        console.error(error);

    }
    catch (error) {
        console.error("Erro no login:", error);
        alert("Erro Firebase: " + error.message);
    }
});
