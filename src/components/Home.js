import React from 'react'
import CardGrid from './CardGrid'
import Search from './Search'

const Home = ({items, isLoading , setQuery}) => {
  return (
   <>
          <Search getQuery={(q) => setQuery(q)} />
          <CardGrid items={items} isLoading={isLoading} />
   </>
  )
}

export default Home