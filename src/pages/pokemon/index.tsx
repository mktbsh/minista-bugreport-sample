import { fetchPokemons } from "../../api"
import { Pokemon } from "../../api/types"

export const getStaticData = async () => {
    const result = await fetchPokemons();
    return {
      props: {
        pokemons: result.results,
      },
    }
  }
  
  type PagePokemonIndexProps = {
    pokemons?: Pokemon[]
  }
  
  const PagePokemonIndex = (props: PagePokemonIndexProps) => {
    return (
      <>
        <h1>Pokemons</h1>
        <ul>
          {props.pokemons?.map((item, index) => (
            <li key={index}>
              <a href={`/test/pokemon/${item.name}/`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </>
    )
  }
  
  export default PagePokemonIndex