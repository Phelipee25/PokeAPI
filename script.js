var tipoArr = ['water', 'normal', 'fire', 'electric', 'grass', 'bug', 'flying', 'fighting', 'ice', 'rock', 'poison', 'psychic',
    'ghost', 'dragon', 'dark', 'steel', 'ground', 'fairy'
];
var spanTipos = [`<span style="background: #6890F0; border-style: solid none; border-width: 1px; border-top-color: #98D8D8; border-bottom-color: #807870; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Water</span></span>`,
    `<span style="background: #A8A878; border-style: solid none; border-width: 1px; border-top-color: #D8D8D0; border-bottom-color: #705848; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Normal</span></span>`,
    `<span style="background: #F08030; border-style: solid none; border-width: 1px; border-top-color: #F8D030; border-bottom-color: #C03028; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Fire</span></span>`,
    `<span style="background: #F8D030; border-style: solid none; border-width: 1px; border-top-color: #F8F878; border-bottom-color: #B8A038; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Electric</span></span>`,
    `<span style="background: #78C850; border-style: solid none; border-width: 1px; border-top-color: #C0F860; border-bottom-color: #588040; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Grass</span></span>`,
    `<span style="background: #A8B820; border-style: solid none; border-width: 1px; border-top-color: #D8E030; border-bottom-color: #A8B820; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Bug</span></span>`,
    `<span style="background: #A890F0; border-style: solid none; border-width: 1px; border-top-color: #C8C0F8; border-bottom-color: #705898; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Flying</span></span>`,
    `<span style="background: #C03028; border-style: solid none; border-width: 1px; border-top-color: #F08030; border-bottom-color: #484038; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Fighting</span></span>`,
    `<span style="background: #98D8D8; border-style: solid none; border-width: 1px; border-top-color: #D0F8E8; border-bottom-color: #9090A0; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Ice</span></span>`,
    `<span style="background: #B8A038; border-style: solid none; border-width: 1px; border-top-color: #E0C068; border-bottom-color: #886830; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Rock</span></span>`,
    `<span style="background: #A040A0; border-style: solid none; border-width: 1px; border-top-color: #D880B8; border-bottom-color: #483850; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Poison</span></span>`,
    `<span style="background: #F85888; border-style: solid none; border-width: 1px; border-top-color: #F8C0B0; border-bottom-color: #789010; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Psychic</span></span>`,
    `<span style="background: #705898; border-style: solid none; border-width: 1px; border-top-color: #A890F0; border-bottom-color: #483850; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Ghost</span></span>`,
    `<span style="background: #7038F8; border-style: solid none; border-width: 1px; border-top-color: #B8A0F8; border-bottom-color: #483890; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Dragon</span></span>`,
    `<span style="background: #705848; border-style: solid none; border-width: 1px; border-top-color: #A8A878; border-bottom-color: #484038; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Dark</span></span>`,
    `<span style="background: #B8B8D0; border-style: solid none; border-width: 1px; border-top-color: #D8D8C0; border-bottom-color: #807870; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Steel</span></span>`,
    `<span style="background: #E0C068; border-style: solid none; border-width: 1px; border-top-color: #F8F878; border-bottom-color: #886830; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Ground</span></span>`,
    `<span style="background: #F0B6BC; border-style: solid none; border-width: 1px; border-top-color: #F5CAD1; border-bottom-color: #905F63; border-radius: 3px; padding: 0.15em; font-size: 12pt; color: #F8F8F8; font-family: arial; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Fairy</span></span>`
]


class Pokemon{
    constructor(nome, id, habilidade, tipo){
    this.nome = nome
    this.id = id
    this.habilidade = habilidade
    this.tipo = tipo
    }
}
let PKM
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
        PKM = new Pokemon(nome, id, habilidades, tipos)
        mostraNome(nome)
        mostraImg(id)
        mostraTipo(tipos)
        mostraHabilidade(habilidades[0])
    })

// async function DescricaoHabi(){
//     await confirmaPKM()
//     axios.get()
// }


}
function mostraTipo(tipoDoPKM){
    let tipoPkm = document.getElementById("type")
    let tipoEstilo = tipoArr.indexOf(tipoDoPKM[0])
    let tipoEstilo1 = tipoArr.indexOf(tipoDoPKM[1])
    if (tipoDoPKM.length <= 1){
        tipoPkm.innerHTML = `${spanTipos[tipoEstilo]}`
    }else {
    tipoPkm.innerHTML = `${spanTipos[tipoEstilo]}, ${spanTipos[tipoEstilo1]} `
    }
    
}
function mostraHabilidade(habilidadeDoPKM){
    let habilidadePkm = document.getElementById("ability")
    habilidadePkm.innerText = habilidadeDoPKM
}
function trocaTipo(){
    let trocaHabilidadePkm = document.getElementById("ability")
    let nomeDaHabilidade = trocaHabilidadePkm.innerText
    let indiceDaHabilidadeAtual = PKM.habilidade.indexOf(nomeDaHabilidade)
    let novoIndice = indiceDaHabilidadeAtual + 1
    if(novoIndice>=PKM.habilidade.length){
        return
    }
    trocaHabilidadePkm.innerText = PKM.habilidade[novoIndice]
}
function voltaTipo(){
    let trocaHabilidadePkm = document.getElementById("ability")
    let nomeDaHabilidade = trocaHabilidadePkm.innerText
    let indiceDaHabilidadeAtual = PKM.habilidade.indexOf(nomeDaHabilidade)
    let novoIndice = indiceDaHabilidadeAtual - 1
    if(novoIndice < 0){
        return
    }
    trocaHabilidadePkm.innerText = PKM.habilidade[novoIndice]
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