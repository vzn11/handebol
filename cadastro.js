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
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        await user.updateProfile({ displayName: name });

        alert("Cadastro realizado com sucesso!");
        window.location.href = "index.html";

    } catch (error) {
        alert("Erro Firebase: " + error.message);
        console.log(error);
    }
});
