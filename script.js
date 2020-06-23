async function confirmaPKM(){
    let pkm = document.getElementById("busca").value
    // console.log(pkm)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pkm}`)
    .then ((resposta)=>{
        let pokemon = resposta.data
        let nome = pokemon.name
        let id= pokemon.id.toString()
        mostraNome(nome)
        mostraImg(id)
    })
}
function mostraNome(nomeDoPoke){
    let nomePkm = document.getElementById("NomePKM")
    nomePkm.innerHTML = nomeDoPoke
}
function mostraImg(id, imgDoPoke){
    if(id.length == 1){
        id = `00${id}`
    }
    if(id.length == 2){
        id = `0${id}`
    }
    let sprite = document.getElementById('imgDoPKM').src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    sprite.innerHTML = imgDoPoke
}
    $("#busca").keyup(function (event) {
    if (event.keyCode === 13) {
      $("#botao").click();
    }
    });