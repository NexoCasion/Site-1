console.log("Cheguei!!!")
function MandeOi(){
    console.log("Oi")
}
function Validar(){
    var senha = document.getElementById("senha").value;
    console.log(senha) 
    if (senha == 'tomate'){
        alert('Bem vindo!!!')
    }
    else{
        alert("Senha errada!")
    }
}
//A partir daqui é uma Api

const ul = document.getElementById('authors');
const url = "https://randomuser.me/api/?results=10" // url do site
function createNode(element){ // funçãopara criar o elemento
    return document.createElement(element); // resposta da função criar item
}
function append(parent,el){ // função que junta um elemento (el) no parent
    return parent.appendchild(el); // adicionando o elemento na lista
}
fetch(url) //pegando os dados da url
    .then((resp)=> resp.json()) // falar que o dado é do tipo json
    .then(function(data){//criando uma funçãoparasalvar os dados
        console.log('dados da requisição',data);//checando se não fiz merda
        let authors = data.results; //filtrandoos dados da Api
        console.log('dados dos autores:',authors);//exibindo dados filtrados
        return authors.map(function(author){//mapeando a lista com os autores
            let li = createNode('li');//criando o item da lista 
            let img = createNode('img');//criando a imagem para exibir o usuario
            let span = createNode('span');//criando span
            img.src=author.picture.medium;//dando endereçoda imagem
            span.innerhtml = `${author.name.first} ${author.name.last}`
            append(li,img);//adicionando na linha a imagem
            append(li,span);//adicionando na linha o spam
            append(ul,li);//adicionando as linhas na imagem
        })
    })
    .catch(function(erro){
        console.log("erro no fetch:",erro);//exibindo o erro
        })
