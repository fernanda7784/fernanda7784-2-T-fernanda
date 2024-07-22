const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Max Caulfield, a protagonista de Life is Strange, descobre que possui o poder de voltar no tempo?"
        alternativas: [
            {
                texto: "verdadeiro!",
                afirmacao: "correto"
            },
            {
                texto:  "falso!",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "O jogo se passa na fictícia cidade de Arcadia Bay, situada no estado do Oregon, nos Estados Unidos?",
        alternativas: [
            {
                texto: "verdadeiro!",
                afirmacao: "CORRETO"
            },
            {
                texto: "falso!",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "Chloe Price, a melhor amiga de Max, desaparece misteriosamente, sendo um dos pontos centrais da trama inicial?",
        alternativas: [
            {
                texto: "verdadeiro!",
                afirmacao: "correto"
            },
            {
                texto: "falso!",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "Life is Strange aborda temas como bullying, depressão e complexidades nos relacionamentos familiares ao longo da narrativa.?",
        alternativas: [
            {
                texto: "verdadeiro!",
                afirmacao: "correto"
            },
            {
                texto: "falso!",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "As escolhas feitas pelo jogador não têm consequências significativas, moldando a narrativa e determinando o destino dos personagens ao longo do jogo? ",
        alternativas: [
            {
                texto: "verdadeiro!",
                afirmacao: "errado"
            },
            {
                texto: "falso!",
                afirmacao: "correto"
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