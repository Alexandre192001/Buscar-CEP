interface responseCEP{
  cep:number
  localidade:string
  uf:string
  ddd:number
}

const btnBuscar = document.querySelector(".btn");

const cepInfo: responseCEP[] = []

btnBuscar.addEventListener("click", async () =>{
  // Campos para autoPreenchimento
  let apendCEP = Number(document.querySelector(".CEP"))
  const apendCidade = document.querySelector(".cidade")
  const apendUF = document.querySelector(".uf")
  const apendDDD = Number(document.querySelector(".ddd"))
  
  //Input do CEP 
  const CEP = Number(document.querySelector(".input-cep").value)
  
  if(CEP===undefined){
    alert("Preencha o campo de busca do CEP com um valor válido")
  } else {

    // Indo buscar CEP
    const API = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    const cepLocal : responseCEP = await API.json()
    cepInfo.push(cepLocal)
    console.log(cepLocal.cep , cepLocal.localidade , cepLocal.uf, cepLocal.ddd)
  
    apendCEP = cepLocal.cep
  }
})