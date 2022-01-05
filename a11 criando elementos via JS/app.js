console.log(
    document.createElement("div")
)
console.log(
    document.createElement("p")
)
////////////////////////////////////////////////////////
var imagem = document.createElement("img")
imagem.src = "juju/1.png"

console.log(
    imagem
)
////////////////////////////////////////////////////////
var paragrafo = document.createElement("p")
paragrafo.innerHTML = "lorem"

console.log(paragrafo)

console.log(paragrafo.innerHTML)
//now both  in 1
console.log(imagem, paragrafo)