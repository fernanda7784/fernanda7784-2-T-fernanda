const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "positivo"
            },
            {
                texto:  "Isso é assustador!",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "positivo"
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Acho que isso pode melhorar muito a saúde do solo e a produtividade.",
                afirmacao: "positivo"
            },
            {
                texto: "Me preocupo que isso possa levar ao uso excessivo de produtos químicos.",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "Agricultores estão usando robôs controlados por IA para colher frutas e vegetais. Você acha isso uma boa ideia?",
        alternativas: [
            {
                texto: "Sim, pode reduzir o trabalho manual e aumentar a eficiência.",
                afirmacao: "positivo"
            },
            {
                texto: "Não, isso pode tirar empregos de muitos trabalhadores agrícolas.",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "Uma startup desenvolveu um aplicativo de IA que ajuda agricultores a vender seus produtos diretamente aos consumidores. Como você reage a essa inovação?",
        alternativas: [
            {
                texto: "Isso é ótimo, pode aumentar os lucros dos agricultores.",
                afirmacao: "positivo"
            },
            {
                texto: "Isso pode ser complicado para agricultores que não são familiarizados com tecnologia.",
                afirmacao: "negativo"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

mostraPergunta();