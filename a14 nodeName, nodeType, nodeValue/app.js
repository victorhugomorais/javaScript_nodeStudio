console.log(
    document.documentElement.firstChild
)

console.log(
    document.documentElement.lastChild
)

console.log(
    document.body.childNodes
)

var lista = document.body.childNodes
//alert(lista[5].innerHTML)

//alert(lista[5].nodeName)

console.log("SOBRE nodeType: 1 é nó de elemento, 2 é nó de atributo, 3 nó de texto, 8 nó de comentario ")
console.log(lista[1].nodeName,lista[1].nodeType,lista[1].nodeValue)

console.log(lista[2].nodeName,lista[2].nodeType,lista[2].nodeValue)

console.log(lista[3].nodeName,lista[3].nodeType,lista[3].nodeValue)

console.log(lista[4].nodeName,lista[4].nodeType,lista[4].nodeValue)

console.log(lista[5].nodeName,lista[5].nodeType,lista[5].nodeValue)

console.log(lista[6].nodeName,lista[6].nodeType,lista[6].nodeValue)

console.log(lista[7].nodeName,lista[7].nodeType,lista[7].nodeValue)

console.log(lista[8].nodeName,lista[8].nodeType,lista[8].nodeValue)

console.log(lista[9].nodeName,lista[9].nodeType,lista[9].nodeValue)

console.log(lista[5].childNodes[3].childNodes[0].nodeValue)

