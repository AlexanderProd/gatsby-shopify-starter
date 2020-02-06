import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
  Pagination,
  Highlight,
  Snippet,
} from 'react-instantsearch-dom'
import 'instantsearch.css/themes/algolia-min.css'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_API_KEY
)

const Hit = ({ hit }) => {
  console.log({ hit })
  return (
    <article>
      <h1>
        <Highlight attribute="title" hit={hit} />
      </h1>
      <p>
        <Snippet attribute="description" hit={hit} />
      </p>
      <img width={200} src={hit.images[0].originalSrc} />
    </article>
  )
}

const SearchPage = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
    >
      <RefinementList attribute="productType" />
      <SearchBox
        className="searchbox"
        translations={{
          placeholder: '',
        }}
      />
      <Hits hitComponent={Hit} />
      <Pagination />
    </InstantSearch>
  )
}

export default SearchPage
