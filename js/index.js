const mercadoria = document.querySelector(".container")
const tagSection = document.createElement("section")
const tagUl = document.createElement("ul")

tagSection.classList.add("vitrine")
tagUl.classList.add("card")

mercadoria.appendChild(tagSection)
tagSection.appendChild(tagUl)

function criandoTemplate(lista, referenciaHtml) {

    for (let i = 0; i < lista.length; i++) {

        let itenAtual = lista[i]

        let template = templateCards(itenAtual)

        referenciaHtml.appendChild(template)
    }
}

criandoTemplate(data, tagUl)

function templateCards(itens) {

    let img = itens.img
    let tipo = itens.tag
    let name = itens.nameItem
    let descrip = itens.description
    let valor = itens.value
    let carrinho = itens.addCart
    let id = itens.id

    let tagLi = document.createElement("li")
    let tagImg = document.createElement("img")
    let tagTipo = document.createElement("h4")
    let tagNome = document.createElement("h3")
    let tagDescrip = document.createElement("p")
    let tagPreco = document.createElement("p")
    let tagBotao = document.createElement("button")

    tagDescrip.classList.add("descricao")
    tagPreco.classList.add("preco")
    tagBotao.classList.add("botao")

    tagBotao.id = id

    tagImg.src = `${img}`
    tagImg.alt = descrip
    tagTipo.innerText = tipo
    tagNome.innerText = name
    tagDescrip.innerText = descrip
    tagPreco.innerText = `R$ ${valor},00`
    tagBotao.innerText = carrinho

    tagLi.append(tagImg, tagTipo, tagNome, tagDescrip, tagPreco, tagBotao)

    return tagLi

}

function criandoTemplate2(referenciaHtml) {


    let template = templateCards2()

    referenciaHtml.appendChild(template)

}

criandoTemplate2(mercadoria)

function templateCards2() {

    let tagSection2 = document.createElement("section")
    let tagBarra = document.createElement("div")
    let tagInput = document.createElement("input")
    let tagBotao2 = document.createElement("button")
    let tagCar = document.createElement("div")
    let tagCarName = document.createElement("h3")
    let tagCarrinho = document.createElement("div")
    let ulCart = document.createElement("ul")
    let msg = document.createElement("img")
    let tagCalculo = document.createElement("div")
    let tagQuantidade = document.createElement("p")
    let tagValor = document.createElement("p")

    tagSection2.classList.add("box")
    tagBarra.classList.add("barra")
    tagCar.classList.add("carrinho")
    tagCarrinho.classList.add("cart")
    tagCarName.classList.add("titulo")
    tagCalculo.classList.add("calculo")
    tagQuantidade.classList.add("quantidade")
    tagValor.classList.add("valor")

    msg.id = "emptyCart"

    msg.src = "./img/cesta (2) (2).jpg"
    msg.alt = "imagem de carrinho de compras vazio."
    tagInput.type = "text"
    tagInput.placeholder = "Digite aqui sua pesquisa"
    tagBotao2.innerText = "Pesquisa"
    tagCarName.innerText = "Carrinho de compras"
    msg.innerText = "Carrinho Vazio"

    tagSection2.appendChild(tagBarra)
    tagBarra.append(tagInput, tagBotao2)
    tagSection2.appendChild(tagCar)
    tagCarrinho.appendChild(ulCart)
    tagCar.append(tagCarName, msg, tagCarrinho, tagCalculo)
    tagCalculo.append(tagQuantidade, tagValor)

    return tagSection2

}

const botoes = document.getElementsByClassName("botao")

let valorTotal = 0
let contador = 0

for (let i = 0; i < botoes.length; i++) {


    let button = botoes[i]

    button.addEventListener("click", function (event) {

        document.querySelector("#emptyCart").classList.add("emptyCar")
        let elemento = event.target
        let elementoId = elemento.id

        let produto = procuraObjeto(elementoId)

        contador++
        document.querySelector(".quantidade").innerHTML = `Quantidade: ${contador}`

        valorTotal += produto.value
        document.querySelector(".valor").innerHTML = `Valor do Carrinho: R$${valorTotal},00`

        if (!produto) {
            alert("Produto não encontrado!")
        } else {

            let li = insereCarrinho(produto)
            let carrinhoCompras = document.querySelector(".cart ul")
            carrinhoCompras.appendChild(li)
        }
    })
}

function procuraObjeto(elementoId) {


    for (let j = 0; j < data.length; j++) {

        let produto = data[j]

        if (produto.id == elementoId) {

            return produto

        }

    }
    return false
}

function insereCarrinho(produto) {

    let li = document.createElement("li")
    let img = document.createElement("img")
    let boxMini = document.createElement("div")
    let nome = document.createElement("h3")
    let preco = document.createElement("p")
    let botao = document.createElement("button")

    boxMini.classList.add("box-mini")
    nome.classList.add("nome2")
    preco.classList.add("p1")
    botao.classList.add("b1")

    img.src = produto.img
    img.alt = produto.description
    nome.innerText = `Produto: ${produto.nameItem}`
    preco.innerText = `Preço: R$ ${produto.value},00`
    botao.innerHTML = "Remover"

    botao.addEventListener("click", function (event) {

        let li = event.path[1]
        li.remove()

        contador--
        document.querySelector(".quantidade").innerHTML = `Quantidade: ${contador}`

        valorTotal -= produto.value
        document.querySelector(".valor").innerHTML = `Valor do Carrinho: R$${valorTotal},00`

        let cart = document.querySelector(".cart ul")

        if (cart.innerText == "") {
            document.querySelector("#emptyCart").classList.remove("emptyCar")
        }

    })

    li.append(img, boxMini, botao)
    boxMini.append(nome, preco)

    return li
}