var p = document.createElement("p")
p.innerHTML = "conteudo inseriro no paragrafo via innerHTML"

//enserindo um paragrafo dentro de um elemento pai
//nesse exemplo estaremos colocando a variavel p criada acima dentro da div id conteudo dentro do index

document.getElementById("conteudo").appendChild(p)

var img = document.createElement("img")
img.src = "juju/1.png"
//img.width="500"
img.height="500"
//adicionar filho dentro do "conteudo"
document.getElementById("conteudo").appendChild(img)

//remover filho 
//document.getElementById("conteudo").removeChild(img)