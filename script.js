var state = { nomes: [], notas: [] };

var students = prompt('Quantos alunos gostaria de informar? ');

for (let i = 0; i < students; i++) {
  var studentName = window.prompt('Insira o nome do aluno(a): ');
  var firstGrade = window.prompt('Insira a primeira nota: ');
  var secondGrade = window.prompt('Insira a segunda nota: ');
  var average = (Number(firstGrade) + Number(secondGrade)) / 2;

  state.nomes.push(studentName);
  state.notas.push(average);
}

for (let index = 0; index < state.nomes.length; index++) {
  var msg = state.nomes[index];
  for (let pos = 0; pos < state.notas.length; pos++) {
    var nota = state.notas[index];
  }
  alert(`O aluno(a): ${msg}, obteve média: ${nota} 
   \n ${averageGrade(nota)}`);
}

console.log(state);

function averageGrade(media) {
  let average = Number(media);

  if (average >= 7) {
    return `E foi aprovado(a) no concurso. Parabéns!!!`;
  }
  if (average > 5) {
    return `Ficou em repescagem... Você não atingiu a média para passar.`;
  } else {
    return `Reprovado(a). Infelizmente não foi desta vez.`;
  }
}
