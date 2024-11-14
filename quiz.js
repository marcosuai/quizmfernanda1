
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar
const nome = document.getElementById('nome').value;
// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao: 1,
    pergunta: "Qual a capital da França?",
    alternativaA: "Londres",
    alternativaB: "Paris",
    alternativaC: "Roma",
    alternativaD: "Berlim",
    correta: "Paris",
}
const q2 = {
    numQuestao: 2,
        pergunta: "Qual filosofo grego foi professor de Alexandre, o Grande ?",
        alternativaA: "Sócrates",
        alternativaB: "Platão ",
        alternativaC: "Aristóteles",
        alternativaD: "Pitagoras",
        correta: "Aristóteles",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Quem escreveu Don Casmurro ?",
    alternativaA : "Machado de Assis",
    alternativaB : "José de Alencar",
    alternativaC : "Jorge Amado",
    alternativaD : "Clarice Lispector",
    correta      : "Machado de Assis",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual é o nome do maior satélite natural de saturno ?",
    alternativaA : "Europa",
    alternativaB : "Ganimedes",
    alternativaC : "Titã",
    alternativaD : "Lo",
    correta      : "Titã",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Em qual continente esta localizado o deserto do Saara ?",
    alternativaA : "América do Norte ",
    alternativaB : "Àsia",
    alternativaC : "Àfrica",
    alternativaD : "Australia",
    correta      : "Àfrica ",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Quem pintou o famoso quadro A ULTIMA CEIA ?",
    alternativaA : "Vincent Van Gogh",
    alternativaB : "Pablo Picasso",
    alternativaC : "Michelangelo",
    alternativaD : "Leonardo da Vinci ",
    correta      : "Leonardo da Vinci",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Em que ano ocorreu a primeira missão tripulada á lua",
    alternativaA : "1965",
    alternativaB : "1969",
    alternativaC : "1972",
    alternativaD : "1975",
    correta      : "1969",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual cidade foi destruida pela erupção do vulcão vesúvio em 79 d.c?",
    alternativaA : "Herculano",
    alternativaB : "Ponpeia",
    alternativaC : "Atenas",
    alternativaD : "Cártago",
    correta      : "Ponpeia",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Em qual país se localiza a maior caverna do mundo, Son Doong?",
    alternativaA : "China",
    alternativaB : "Vietnã",
    alternativaC : "Indonésia",
    alternativaD : "Malásia",
    correta      : "Vietnã",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual a lingua mais falada na Àfrica?",
    alternativaA : "Àrabe",
    alternativaB : "Suaíli",
    alternativaC : "Francês",
    alternativaD : "ingles",
    correta      : "Suaíli",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}