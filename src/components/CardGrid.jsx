import React from 'react'
import Card from './Card'
import '../App.css';

const CardGrid = ({items, isLoading}) => {
  return (
      isLoading ? (<>Loading....</>) :(
      <div className="container mt-4">
              {items.map(item => (
                  <div className="card">
                      <Card item={item}/>
                  </div>
              ))}
      </div>
      )
  )
}

export default CardGrid