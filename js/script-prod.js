function validarProduto(idNomeProd, idCodProd, idQuantProd) {
    let nome = document.getElementById(idNomeProd).value;
    let codigo = document.getElementById(idCodProd).value;
    let quantidade = document.getElementById(idQuantProd).value;

    if (nome == "")
        alert("Nome do Produto não pode estar em branco. Favor preencher o campo.");
    else if (codigo == "")
        alert("Código do Produto não pode estar em branco. Favor preencher o campo.");
    else cadastrarProduto(nome, codigo, parseInt(quantidade));
}

function cadastrarProduto(nomePd, codPd, quantPd) {
    let novoProduto = {nome:nomePd, codigo:codPd, quantidade:quantPd};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = [];
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto);
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram registradas "+quantPd+" unidades do produto "+ nomePd+" no inventário.");
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    } 
}

function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque",++document.getElementById(idCampo).innerHTML)
}

function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalEstoque;
    }
}

function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1 style='color: #808080; font-family: Sans-serif;'>Inventário</h1>")
        if (produtos == null)
            document.write("<h3 style='color: #808080; font-family: Sans-serif;'>Ainda não há itens registrados no inventário</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(nomePd => {
                document.write("<ul style='color: #808080; border: 1px solid; border-radius: 2px; padding: 20px;'>");
                document.write("<li style='color: #808080; font-family: Sans-serif;'>Nome do produto: "+nomePd.nome+"</li>");
                document.write("<li style='color: #808080; font-family: Sans-serif;'>Código do produto: "+nomePd.codigo+"</li>");
                document.write("<li style='color: #808080; font-family: Sans-serif;'>Quantidade no inventário: "+nomePd.quantidade+"</li>");
                document.write("</ul>");
            });
        }
    }    
}