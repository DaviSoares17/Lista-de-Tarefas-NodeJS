const prompt = require("prompt-sync")();

let condicao = "N";
let tarefas = [];
let status = [];

console.log("Sua lista de tarefas esta vazia.\n");
let tarefa = prompt("Digite a primeira tarefa: "); // define a primeira tarefa que sera colocada na lista
tarefas.push(tarefa); // adiciona a primeira tarefa na lista
status.push("Pendente"); // define o status como pendente

while (condicao == "N"){ //loop do aplicativo

    imprimeTarefas();
    acao();
    //encerra();

}


function acao(){//funcao responsavel por adicionar, concluir, excluir tarefas e encerrar aplicação

    //imprime a mensagem exibindo as opções
    console.log("----------------------------------\n\nO que deseja fazer agora?\n\n1 - adicionar tarefa\n2 - concluir tarefa\n3 - excluir tarefa\n4 - encerrar aplicação\n\n")
    let resp = prompt("Digite o número correspondente: ");//recebe o valor solicitado

    if (resp == 1){ // 1 = adicionar tarefa

        tarefa = prompt("Digite a nova tarefa: ");
        tarefas.push(tarefa); //adiciona nova tarefa
        status.push("Pendente"); //define status padrao "pendente"

    }else if(resp == 2){
                        //usuario digita a posição que quer concluir, como o index começa em zero subtrai o input do usuario
        let tarefaC = prompt("Digite o numero da tarefa que deseja concluir:") - 1;

        if(tarefaC + 1 > tarefas.length){ //soma de volta o input removido para validar se a pessoa colocou um numero 
                                          //maior q a quantidade na lista
            console.log("Número invalido");
            pause(); //pausa a aplicação só para o usuario precisar confirmar antes de tudo ser impresso novamente
        }else{

            status.splice(tarefaC,1,"Concluida"); // se o numero fornecido for valido, atualiza o status para concluido
        }
    
    }else if(resp == 3){ // 3 = exluir

        let tarefaE = prompt("Digite o numero da tarefa que deseja excluir: ") - 1;//mesma coisa do anterior

        if(tarefaE + 1 > tarefas.length){

            console.log("Número invalido");
            pause();
        }else{

            tarefas.splice(tarefaE,1);//apaga a tarefa solicitada
            status.splice(tarefaE,1);//apaga o status da tarefa
        }

    }else{ // !1 !2 !3 = encerra aplicação

        console.log("\n\n\nAplicação Encerrada.");
        condicao = "S";// finaliza o loop while
    }



}



function imprimeTarefas(){ //funcao q imprime a lista com as tarefas quando necessario

    console.log("\n\n\n\n\n\n\n-------Sua lista de tarefas-------\n");
    
    for (let i = 0; i < tarefas.length; i++){ //loop para imprimir cada linha de tarefa e status, com tamanho dinamico

        console.log(`${tarefas[i]}.................${status[i]}`);

    }
    console.log("\n");

}

function encerra(){ //funcao caso precisasse encerrar o loop

    let condicao = prompt("Prosseguir?");

}

function pause(){ //funcao caso precise dar uma pausa em algum momento

    let nada = prompt("");

}