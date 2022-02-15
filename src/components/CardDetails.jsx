import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment';

const CardDetails = () => {
    const [data, setData] = useState({});
    const [comms, setComms] = useState([]);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        console.log(id)
        const fetchItems = () => {
            axios.get(
                `http://hn.algolia.com/api/v1/items/${id}`
            ).then(data => {
                console.log(data);
                setData(data);
                if (data.data.children) {
                    setComms(comms => ([...comms, ...data.data.children]));
                }
                else {
                    console.log("No Data");
                }
                console.log(comms);
            })
        }

        fetchItems()
    }, [])
    return (
        <>
            <h4>{data?.data?.title}</h4>
            <h6>{data?.data?.points}</h6>
            <div>
                {
                 comms?.map(comm => (
                     <Comment postAuthor={data.author} comment={comm} />
                 ))   
                }
            </div>
        </>

    )
}

export default CardDetails