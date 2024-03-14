var i = 0;
var linha;
var alunos = [];

function Aluno(nome,curso,disciplina,notas){
    this.nome = nome;
    this.curso =  curso;
    this.disciplina =  disciplina;
    this.notas = notas;
    this.media = function(){
        return ((parseFloat(this.notas[0]) + parseFloat(this.notas[1]) + parseFloat(this.notas[2]))/3).toFixed(2);
    }
}

function cadastrarAluno(){
    
    var nomeAluno = document.getElementById("txNome").value;
    var cursoAluno = document.getElementById("txCurso").value;
    var disciplinaAluno = document.getElementById("txDisciplina").value;
    var nota1Aluno = document.getElementById("txNota1").value;
    var nota2Aluno = document.getElementById("txNota2").value;
    var nota3Aluno = document.getElementById("txNota3").value;

    alunos[i] = new Aluno(nomeAluno, cursoAluno, disciplinaAluno,[nota1Aluno,nota2Aluno,nota3Aluno]);
    listaAlunos();
    i++;
}

function listaAlunos(){
        var tabela = document.getElementById("tabAlunos");
        var row = tabela.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = alunos[i].nome;
        cell2.innerHTML = alunos[i].curso;
        cell3.innerHTML = alunos[i].disciplina;
        cell4.innerHTML = alunos[i].media();
}