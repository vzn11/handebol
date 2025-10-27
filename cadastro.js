function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const senha = document.getElementById('register-password').value;



    novoUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    db.ref('usuarios').push(novoUsuario)
        .then(() => {
            alert('Usuário cadastrado com sucesso!');
            document.getElementById('register-name').value = "";
            document.getElementById('register-email').value = "";
            document.getElementById('register-password').value = "";
        })


}