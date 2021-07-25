function validarUsuario(idNomeUser, idEmailUser, idTelUser) {
    let nome = document.getElementById(idNomeUser).value;
    let email = document.getElementById(idEmailUser).value;
    let telefone = document.getElementById(idTelUser).value;

    if (nome == "")
        alert("Nome não pode estar em branco. Favor preencher o campo.");
    else if (email == "")
        alert("Email não pode estar em branco. Favor preencher o campo.");
    else if (telefone == "")
        alert("Telefone não pode estar em branco. Favor preencher o campo.");
    else cadastrarUsuario(nome, email, parseInt(telefone));
}

function cadastrarUsuario(nomeUsr, emailUsr, telUsr) {
    let novoUsuario = {nome:nomeUsr, email:emailUsr, telefone:telUsr};

    if (typeof(Storage) !== "undefined") {
        let usuarios = localStorage.getItem("usuarios");
        if (usuarios == null) usuarios = [];
        else usuarios = JSON.parse(usuarios);
        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios",JSON.stringify(usuarios))
        alert("Usuário cadastrado com êxito.");
        atualizarListaUsuarios("totalLista");
        location.reload();
    } 
}

function atualizarListaUsuarios(idCampo) {
    localStorage.setItem("totalLista",++document.getElementById(idCampo).innerHTML)
}

function carregarListaUsuarios(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalLista = localStorage.getItem("totalLista");
        if (totalLista == null) totalLista = 0;
        document.getElementById(idCampo).innerHTML = totalLista;
    }
}

function listarUsuarios() {
    if (typeof(Storage) !== "undefined") {
        let usuarios = localStorage.getItem("usuarios");
        document.write("<h1 style='color: #808080; font-family: Sans-serif;'>Lista de Usuários</h1>")
        if (usuarios == null)
            document.write("<h3 style='color: #808080; font-family: Sans-serif;'>Ainda não há usuários cadastrados.</h3>");
        else {
            usuarios = JSON.parse(usuarios);
            usuarios.forEach(nomeUsr => {
                document.write("<ul style='color: #808080; border: 1px solid; border-radius: 2px; padding: 20px;'>");
                document.write("<li style='color: #808080; font-family: Sans-serif;'>Nome: "+nomeUsr.nome+"</li>");
                document.write("<li style='color: #808080; font-family: Sans-serif;'>Email: "+nomeUsr.email+"</li>");
                document.write("<li style='color: #808080; font-family: Sans-serif;'>Telefone: "+nomeUsr.telefone+"</li>");
                document.write("</ul>");
            });
        }
    }    
}