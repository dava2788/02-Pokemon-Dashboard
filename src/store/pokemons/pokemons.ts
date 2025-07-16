import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';


interface PokemosState {
  favorites: {[key: string]: SimplePokemon},
}

const initialState: PokemosState = {
  favorites : {}
  // '1' : {id:'1', name:'bulbasaur'},
  // '3' : {id:'3', name:'venusaur'},
  // '6' : {id:'6', name:'charizard'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemos(state,action:PayloadAction< {[key: string]: SimplePokemon}>){
      state.favorites = action.payload;

    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      //if exisit
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        //return;
      } else {

        state.favorites[id] = pokemon;
      }

      //No se debe de hacer en Reddux un antiPatron
      localStorage.setItem('favorite-Pokemons', JSON.stringify(state.favorites))

    }

  }
});

export const {setFavoritePokemos, toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer