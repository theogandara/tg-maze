
const map = [

    "WWWWWWWWWWWWWWWWWWWWW",

    "W   W     W     W W W",

    "W W W WWW WWWWW W W W",

    "W W W   W     W W   W",

    "W WWWWWWW W WWW W W W",

    "W         W     W W W",

    "W WWW WWWWW WWWWW W W",

    "W W   W   W W     W W",

    "W WWWWW W W W WWW W F",

    "S     W W W W W W WWW",

    "WWWWW W W W W W W W W",

    "W     W W W   W W W W",

    "W WWWWWWW WWWWW W W W",

    "W       W       W   W",

    "WWWWWWWWWWWWWWWWWWWWW",

];


// "S     W W W W W W WWW",


function criaLabirinto() {

    map.forEach((elemento, indice) => {


        const criaDiv = document.createElement("section")


        criaDiv.setAttribute("class", "linha")

        criaDiv.setAttribute("id", "linha" + indice)

        labirinto.appendChild(criaDiv)


        let arrayDeElementos = elemento.split('')




        arrayDeElementos.forEach((item, index) => {


            const linhasLabirinto = document.querySelectorAll(".linha")


            const celulas = document.createElement("div")

            celulas.setAttribute("class", "celulas")


            linhasLabirinto[indice].appendChild(celulas)


            if (item === "W") {

                celulas.setAttribute("class", "parede celula")

            }

            else if (item === "S") {

                celulas.setAttribute("class", "start celula")

            }

            else if (item === "F") {

                celulas.setAttribute("class", "finish celula")

            }

            else {

                celulas.setAttribute("class", "caminho celula")

            }

        })

    })

}


criaLabirinto()



const inicio = document.querySelector(".start")


const jogador = document.createElement("div")

jogador.setAttribute("class", "jogador")


inicio.appendChild(jogador)




let posicaoAtual = 189


const celulas = document.querySelectorAll(".celula")


const conteudo = document.querySelector("#labirinto")


function movimentaJogador() {


    celulas.forEach((element, index) => {

        element.setAttribute("id", index)

    })


    document.addEventListener("keydown", (evt) => {


        const keyName = evt.key


        console.log(keyName)


        if (keyName === 'ArrowDown' && celulas[posicaoAtual + 21].className === "caminho celula") {

            celulas[posicaoAtual + 21].appendChild(jogador)

            posicaoAtual += 21

        }

        else if (keyName === 'ArrowUp' && celulas[posicaoAtual - 21].className === "caminho celula") {

            celulas[posicaoAtual - 21].appendChild(jogador)

            posicaoAtual -= 21

        }

        else if (keyName === 'ArrowLeft' && celulas[posicaoAtual - 1].className === "caminho celula") {

            celulas[posicaoAtual - 1].appendChild(jogador)

            posicaoAtual -= 1

        }

        else if (keyName === 'ArrowRight' && celulas[posicaoAtual + 1].className === "caminho celula") {


            celulas[posicaoAtual + 1].appendChild(jogador)

            posicaoAtual += 1

        }

        // condição de vitória

        else if (keyName === 'ArrowRight' && celulas[posicaoAtual + 1].className === "finish celula") {

            celulas[posicaoAtual + 1].appendChild(jogador)

            posicaoAtual += 1


            labirinto.innerHTML = ""

            const divVitoria = document.createElement("div")

            divVitoria.setAttribute("class","mensagemVitoria")

            const textoVitoria = document.createElement("h2")

            textoVitoria.innerText = "Parabéns, você conseguiu !"

            divVitoria.appendChild(textoVitoria)

            labirinto.appendChild(divVitoria)

        }

    })


}


movimentaJogador()


