'use client'

import { PokemonGrid } from "./PokemonGrid"
import { useAppSelector } from '../../store/index';
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites));
    // const [pokemons] = useState(favoritePokemons);    

    //Este es otra opcion para usar el localstorage
    //POr que eso solo se deberia usar en client components
    // useEffect(() => {
    //     const storedFavorites = JSON.parse(localStorage.getItem("favorite-Pokemons") ?? "{}");
    //     setPokemons(Object.values(storedFavorites));
    // }, [])


    return (
        <>
            {
                favoritePokemons.length === 0
                    ? <NoFavorite />
                    : <PokemonGrid pokemons={favoritePokemons} />
            }
        </>
    )
}


export const NoFavorite = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>
        </div>
    )
}