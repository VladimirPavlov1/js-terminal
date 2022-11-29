console.log('hello')
const divCardEl= document.querySelector('.card-body')
console.log(divCardEl)

function fetchPokemon(pokemonId){
return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(resp=>{return resp.json()})}

fetchPokemon(7).then(createCardDivMarkup(pokemon)).catch(error=>console.error('no'))
function createCardDivMarkup(pokemon){
const markup= pokemon.map(item=>`
<h2 class="card-title">Ім'я:${item.name}</h2>
<p class="card-text">Вага:${item.weight}</p>
<p class="card-text">Зріст:${item.height}</p>

<p class="card-text">Навики</p>`)
divCardEl.innerHTML=markup

}

