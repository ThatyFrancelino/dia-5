console.log("Oi!!! Esse é o meu primeiro script")

const funcaoParaConsole = () => {
    console.log("Esse texto foi chamado pela funcao")

}

const funcaoDeAlerta = () => {
    alert("Esse texto foi chamado pela funcao")
}

const alterarParagrafo = () => {
    //acessar o DOM - Document Object Model
    //Mapas - objetos
    document.getElementById("paragrafo1").innerText = "Esse é o texto alterado"

    console.log(paragrafo)
}