import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";



const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .catch(err => console.log(err));

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));

    return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de POkemons <small>Estatico</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}