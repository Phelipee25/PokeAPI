async function confirmaPKM(){
    let pkm = document.getElementById("busca").value.toLowerCase()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pkm}`)
    .then ((resposta)=>{
        let pokemon = resposta.data
        let nome = pokemon.name
        let id= pokemon.id.toString()
        let habilidades = []
        pokemon.abilities.forEach((habilidade) => {
            habilidades.push(habilidade.ability.name)
        })
        let tipos = []
        pokemon.types.forEach((tipo) => {
            tipos.push(tipo.type.name)
        })
        mostraNome(nome)
        mostraImg(id)
        mostraTipo(tipos)
        mostraHabilidade(habilidades[0])
        trocaTipo(habilidades[0+1])
    })
}
function mostraTipo(tipoDoPKM){
    let tipoPkm = document.getElementById("type")
    tipoPkm.innerText = tipoDoPKM
    
}
function mostraHabilidade(habilidadeDoPKM){
    let habilidadePkm = document.getElementById("ability")
    habilidadePkm.innerText = habilidadeDoPKM
}
function trocaTipo(trocaHabiPKM){
    let trocaHabilidadePkm = document.getElementById("ability")
    trocaHabilidadePkm.innerText = trocaHabiPKM
}
function mostraNome(nomeDoPoke){
    let nomePkm = document.getElementById("nomePKM")
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
      $("#confirma").click();
    }
    });