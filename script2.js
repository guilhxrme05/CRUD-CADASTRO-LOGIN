let elementoInputCadastroUser = document.getElementById("inptCadastroUser")
let elementoInputCadastroPass = document.getElementById("inptCadastroPass")
let elementoInputCadastroEmail = document.getElementById("inptCadastroEmail")

let elementoInputLoginUser = document.getElementById("inptLoginUser")
let elementoInputLoginPass = document.getElementById("inptLoginPass")

let elementoLabelLista = document.getElementById("lblLista")

let vetorUsers = []
let vetorPasswords = []
let vetorEmails = []

let userPesquisa
let userPosicao
let listaDados = ""


function Cadastrar(){

    vetorUsers.push(elementoInputCadastroUser.value)
    vetorPasswords.push(elementoInputCadastroPass.value)
    vetorEmails.push(elementoInputCadastroEmail.value)
    alert("Cadastrado com sucesso.")

    MostraDadosConsole()
    LimpaCamposCadastro()

}

function Pesquisar(){

    userPesquisa = elementoInputCadastroUser.value
    userPosicao = vetorUsers.indexOf(userPesquisa)

    if(userPosicao != -1){
        elementoInputCadastroPass.value = vetorPasswords[userPosicao]
        elementoInputCadastroEmail.value = vetorEmails[userPosicao]
        alert("Usuário existe.")
    }else{
        alert("User não existe.")
    }
    
}

function Editar(){

     if(elementoInputCadastroUser.value != vetorUsers[userPosicao]){
          alert("Não e possível alterar o username.")
     }else{
        vetorPasswords[userPesquisa] = (elementoInputCadastroPass.value)
        vetorEmails[userPosicao] = (elementoInputCadastroEmail.value)
        alert("Dados editados.")
        
        MostraDadosConsole()
        LimpaCamposCadastro()
        
     }

  
    
}

function Excluir(){

    if(elementoInputCadastroPass.value == "" && elementoInputCadastroEmail.value == ""){
        alert("Pesquisar o usuário para puxar os dados, antes de excluir")
    }else{
        vetorUsers.splice(userPosicao, 1)
        vetorPasswords.splice(userPosicao, 1)
        vetorEmails.splice(userPosicao, 1)
        alert("Excluido com sucesso.")
        
        MostraDadosConsole()
        LimpaCamposCadastro()
    }
    
}

function Listar(){

    for(i=0; i < vetorUsers.length; i++){
    listaDados += `${vetorUsers[i]} - ${vetorPasswords[i]} - ${vetorEmails[i]} ` + '<br>'
    }

    elementoLabelLista.innerHTML = listaDados
    
}

function Logar(){
    
    let podeLogar = false

    
    for(i=0; i < vetorUsers.length; i++){

        if(elementoInputLoginUser.value == vetorUsers[i] && elementoInputLoginPass.value == vetorPasswords[i]){

            podeLogar = true
        }

        if(podeLogar){
            alert("Login efetuado.")
            LimpaCamposLogin()
        }else{
            alert("Dados não conferem.")
            LimpaCamposLogin()
        }
        
    }
    
    
   
    
    
}

function LimpaCamposCadastro(){
 
    elementoInputCadastroUser.value = ""
    elementoInputCadastroPass.value = ""
    elementoInputCadastroEmail.value = ""


}


function MostraDadosConsole(){

    console.table(vetorUsers)
    console.table(vetorPasswords)
    console.table(vetorEmails)
}

function LimpaCamposLogin(){
    elementoInputLoginUser.value = ""
    elementoInputLoginPass.value = ""

}