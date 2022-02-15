import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import './App.css'
import CardGrid from './components/CardGrid'
import { Route, Routes } from 'react-router-dom'
import CardDetails from './components/CardDetails'
import Home from './components/Home'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      )

      console.log(result.data.hits)

      setItems(result.data.hits)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <>
      
       <Routes >
        <Route path="/" element={<Home items={items} isLoading={isLoading} setQuery={setQuery} />}/>
        <Route exact path="/item/:id" element={<CardDetails />} />
       </Routes>
    </>
  )
}

export default App