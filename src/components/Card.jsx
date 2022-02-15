import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{item.author}</h5>
                <p className="badge bg-secondary ">{item.objectID}</p><br/>
                <button className="btn text-danger text-decoration-none"><Link to={`/item/${item.objectID}`} >View Details </Link></button>
            </div>
        </div>
    )
}

export default Card