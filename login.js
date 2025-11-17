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
        // No Firebase v8:
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        alert("Login realizado com sucesso!");
        window.location.href = "index.html";

    } catch (error) {
        console.error("Erro no login:", error);
        alert("Erro Firebase: " + error.message);
    }
});
