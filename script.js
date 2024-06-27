const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Uma nova tecnologia de IA está sendo utilizada para monitorar as plantações e prever pragas com antecedência. Qual é a sua opinião sobre isso?",
        alternativas: [
            {
                texto: "É fantástico, isso pode aumentar muito a eficiência da agricultura!",
                afirmacao: "positivo"
            },
            {
                texto: "Tenho preocupações sobre a dependência excessiva de tecnologia.",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "Uma empresa agrícola está utilizando drones equipados com IA para plantar e regar as culturas. Como você vê essa inovação?",
        alternativas: [
            {
                texto: "Isso pode economizar muito tempo e recursos.",
                afirmacao: "positivo"
            },
            {
                texto: "E se os drones falharem e prejudicarem as colheitas?",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "IA está sendo usada para analisar dados do solo e recomendar a quantidade ideal de fertilizantes. Qual é a sua reação?",
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