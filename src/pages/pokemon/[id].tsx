import { fetchPokemons } from "../../api"
import { Pokemon } from "../../api/types";

export const getStaticData = async () => {
    const response = await fetchPokemons();
    return response.results.map((item: Pokemon) => ({
      props: item,
      paths: { id: item.name },
    }))
  }
  
  const PagePokemonTemplate = (props) => {
    return (
      <>
        <h1 data-search>{props.name}</h1>
        <div>{props.url}</div>
      </>
    )
  }
  
  export default PagePokemonTemplate