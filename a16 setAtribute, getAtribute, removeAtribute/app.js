document.getElementById("btn-set").addEventListener("click", function(){
    document.getElementById("title").setAttribute("class", "red")
})

document.getElementById("btn-rmv").addEventListener("click", function(){
    document.getElementById("title").removeAttribute("class")
})

document.getElementById("btn-get").addEventListener("click",function(){
    var value = document.getElementById("title").getAttribute("class")
    //alert(value)
    document.getElementById("class").innerHTML = value
})

// document.getElementById("btn-get").addEventListener("click",function(){
//     var value = document.getElementById("title").getAttribute("class")//aqui estamos selecionando o title, que é a origem do que estamos requisitando, e o get está pegando os valores da classe "class"
//     document.getElementById("class").innerHTML = value
// })