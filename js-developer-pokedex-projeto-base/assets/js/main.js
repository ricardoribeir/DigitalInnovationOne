const pokemonList = document.getElementById('pokemonList');
const limit = 12;
let offset = 0;

// Referências aos elementos do modal
const pokemonModal = document.getElementById('pokemonModal');
const closeModal = document.getElementById('closeModal');
const pokemonModalName = document.getElementById('pokemonModalName');
const pokemonModalId = document.getElementById('pokemonModalId');
const pokemonModalImage = document.getElementById('pokemonModalImage');
const pokemonModalHeight = document.getElementById('pokemonModalHeight');
const pokemonModalWeight = document.getElementById('pokemonModalWeight');
const pokemonModalAbilities = document.getElementById('pokemonModalAbilities');

// Função para buscar um lote de Pokémon a partir do deslocamento atual
async function fetchPokemonBatch() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const data = await response.json();

        const pokemonDetails = await Promise.all(
            data.results.map(async (pokemon) => {
                const pokemonData = await fetch(pokemon.url);
                return pokemonData.json();
            })
        );

        pokemonDetails.forEach((pokemon) => renderPokemon(pokemon));
        offset += limit;
    } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
    }
}

// Função para renderizar um único Pokémon
function renderPokemon(pokemon) {
    const listItem = document.createElement('li');
    listItem.classList.add('pokemon');

    listItem.innerHTML = `
        <span class="number">#${pokemon.id}</span>
        <h2 class="name">${pokemon.name}</h2>
        <div class="detail">
            <ul class="types">
                ${pokemon.types.map(type => `<li class="type">${type.type.name}</li>`).join('')}
            </ul>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </div>
        <button class="details-button" onclick="showPokemonDetails(${pokemon.id})">Detalhes</button>
    `;

    pokemonList.appendChild(listItem);
}

// Função para exibir detalhes do Pokémon no modal
async function showPokemonDetails(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await response.json();

        // Preenche as informações no modal
        pokemonModalName.textContent = pokemon.name;
        pokemonModalId.textContent = `#${pokemon.id}`;
        pokemonModalImage.src = pokemon.sprites.front_default;
        pokemonModalHeight.textContent = `${pokemon.height / 10} m`;
        pokemonModalWeight.textContent = `${pokemon.weight / 10} kg`;
        pokemonModalAbilities.textContent = pokemon.abilities.map(ability => ability.ability.name).join(', ');

        // Exibe o modal
        pokemonModal.style.display = 'block';
    } catch (error) {
        console.error("Erro ao buscar detalhes do Pokémon:", error);
    }
}

// Função para fechar o modal
closeModal.addEventListener('click', () => {
    pokemonModal.style.display = 'none';
});

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == pokemonModal) {
        pokemonModal.style.display = 'none';
    }
}

// Função para detectar o scroll até o fim da página
function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchPokemonBatch();
    }
}

// Carrega o primeiro lote de Pokémon ao carregar a página
document.addEventListener('DOMContentLoaded', fetchPokemonBatch);
window.addEventListener('scroll', handleScroll);
