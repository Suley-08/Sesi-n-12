let base_url = "https://pokeapi.co/api/v2/generation/1/"
let url_pokemon = "https://pokeapi.co/api/v2/pokemon/"

pokemon()
async function pokemon() {
    let response = await fetch(base_url)
    let data = await response.json()

    let html = "<option value=''>Seleccione . . .</option>"
    for(index in data.pokemon_species){
        html += "<option value="+data.pokemon_species[index].name+">"+data.pokemon_species[index].name+"</option>"
    }
    $("#lista").append(html)
}

async function ver() {
    let response = await fetch(url_pokemon+$("#lista").val())
    let data = await response.json()

    $("#poke_img").attr("src", data.sprites.front_default)
    $("#poke_name").text(data.name)
}




























//-------------------------------------------------------------------------------

/*const pokemonContainer = document.querySelector(".pokemon-container");

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        createPokemon(data);
    });
}

function fetchPokemons(number) {
    for (let i = 1; i <= number; i++){
        fetchPokemon(i);
    }
}

function createPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number = document.createElement(`p`);
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name =document.createElement(`p`);
    name.classList.add('name')
    name.textContent = pokemon.name

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
}

fetchPokemons(15)*/