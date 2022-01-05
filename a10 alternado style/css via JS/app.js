console.log(
    document.getElementById("p1").innerHTML = "Nova atribuição via innerHTML"
)

var idp2 = document.getElementById("p2")
idp2.innerHTML = "nova atribuição para p2 via variavel"

//js é incrivel, ainda consegue mexer no css!!!! veja só:
idp2.style.color = "red"
idp2.style.backgroundColor = "#666"
idp2.style.height = "500px"
idp2.style.border = "100px solid red"

var imagem = document.getElementById("imagem1")
imagem.src = "juju/1.png"
imagem.alt="thatha + juju"
//imagem.width  = "30"