// API CEP - https://viacep.com.br/ws/${CEP}/json/

const btnCep = document.querySelector(".btn")

class ResponseCep {
    constructor(cep, localidade, cidade, ddd) {
        this.cep = cep
        this.localidade = localidade
        this.cidade = cidade
        this.add = ddd
    }
}

btnCep.addEventListener("click", async () => {
    let CEP = document.querySelector(".input-cep").value

    if (CEP === "" || CEP.length < 8 || typeof CEP === "undefined") {
        alert("Preencha o campo com um valor valido")
    } else {

        const response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        const API = await response.json()

        // Campos de autocomplete
        const cep = document.querySelector(".CEP")
        const cidade = document.querySelector(".cidade")
        const uf = document.querySelector(".uf")
        const ddd = document.querySelector(".ddd")

        cep.innerHTML = API.cep
        cidade.innerHTML = API.localidade
        uf.innerHTML = API.uf
        ddd.innerHTML = API.ddd
    }
    document.querySelector(".input-cep").value = ''
})