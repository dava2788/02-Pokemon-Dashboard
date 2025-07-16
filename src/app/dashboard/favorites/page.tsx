import { FavoritePokemons } from "@/pokemons";


export const metadata = {
    title:'Favorits',
    description:'Testing description'
}


export default async function PokemonsPage() {
    

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de POkemons Favoritos <small className="text-blue-500">Global state</small></span>
            <FavoritePokemons/>
            
        </div>
    );
}
