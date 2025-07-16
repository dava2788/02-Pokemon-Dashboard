import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localstorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action);

        if (action.type === 'pokemons/toggleFavorite') {
            const { pokemons } = state.getState() as RootState;
            //No se debe de hacer en Reddux un antiPatron
            localStorage.setItem('favorite-Pokemons', JSON.stringify(pokemons))
            return;
        }
    }

}