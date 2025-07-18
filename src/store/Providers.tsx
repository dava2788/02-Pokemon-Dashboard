'use client'
import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setFavoritePokemos } from "./pokemons/pokemons";

interface Props {
   children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
   useEffect(() => {
      const favorites = JSON.parse(localStorage.getItem("favorite-Pokemons") ?? "{}");
      store.dispatch(setFavoritePokemos(favorites));
   }, [])

   return (
      <Provider store={store}>
         {children}
      </Provider>
   )
}
