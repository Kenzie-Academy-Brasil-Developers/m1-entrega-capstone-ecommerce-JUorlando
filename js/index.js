const mercadoria = document.querySelector(".container")
const tagSection = document.createElement("section")
const tagUl = document.createElement("ul")

tagSection.classList.add("vitrine")
tagUl.classList.add("card")

mercadoria.appendChild(tagSection)
tagSection.appendChild(tagUl)

function criandoTemplate(lista, referenciaHtml){

    for(let i = 0; i < lista.length; i++){

        let itenAtual = lista[i]

        let template = templateCards(itenAtual)

        referenciaHtml.appendChild(template)
    }
}

criandoTemplate(data, tagUl)

function templateCards(itens){

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

function criandoTemplate2(referenciaHtml){


        let template = templateCards2()

        referenciaHtml.appendChild(template)

}

criandoTemplate2(mercadoria)

function templateCards2(){

    let tagSection2 = document.createElement("section")
    let tagBarra = document.createElement("div")
    let tagForm = document.createElement("form")
    let tagInput = document.createElement("input")
    let tagBotao2 = document.createElement("button")
    let tagCar = document.createElement("div")
    let tagCarName = document.createElement("h3")
    let tagCarrinho = document.createElement("div")
    let tagConteudo = document.createElement("ul")

    tagSection2.classList.add("box")
    tagBarra.classList.add("barra")
    tagCar.classList.add("carrinho")
    tagConteudo.classList.add("cart")

    tagInput.type = "text"
    tagInput.placeholder = "Digite aqui sua pesquisa"
    tagBotao2.innerText = "Pesquisa"
    tagCarName.innerText = "Carrinho de compras"

    tagSection2.appendChild(tagBarra)
    tagBarra.append(tagForm, tagInput, tagBotao2)
    tagSection2.appendChild(tagCar)
    tagCar.append(tagCarName, tagCarrinho)
    tagCarrinho.appendChild(tagConteudo)

    return tagSection2

}

const botoes = document.getElementsByClassName("botao")

for(let i = 0; i < botoes.length; i++){

    let button = botoes[i]

    button.addEventListener("click", function(event){

        let elemento = event.target
        let elementoId = elemento.id

        let produto = procuraObjeto(elementoId)
        
        if(!produto){
            alert("Produto não encontrado!")
        } else {
            insereCarrinho(produto)
        }
    })
}

function procuraObjeto(elementoId){


    for(let j = 0; j < data.length;j++){

        let produto = data[j]

        if(produto.id == elementoId){

            return produto

        }

    }
    return false
}

function insereCarrinho(produto){

    let carrinho = document.getElementsByClassName(".cart")
    console.log(produto, carrinho)

}