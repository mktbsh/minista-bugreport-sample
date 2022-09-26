import { PokemonResult } from "./types";


const fetcher = async (url: string) => await fetch(url);

export const fetchPokemons = async (): Promise<PokemonResult> => {
    const res = await fetcher('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    if (!res.ok) throw new Error('error');
    return await res.json()
}