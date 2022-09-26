import { Search } from "minista"

export default () => {
  return (
    <Search
      jsonPath="/assets/search.json"
      placeholder="Search..."
      className="block-search"
      searchFieldClassName="block-search-field"
      searchListClassName="block-search-list"
    />
  )
}