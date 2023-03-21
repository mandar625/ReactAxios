import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const basrURL = "https://jsonplaceholder.typicode.com/posts"

const Getaxios = () => {
    const [mydata, setData] = useState([])
    useEffect(() => {
        Axios.get(basrURL).then((response) => {

            setData(response.data)
        })
    }, [])
    return (

        <ol>
            {mydata.map((items) => {

                const { id, title, body } = items;

                return (

                    <li key={id} >
                        <h2>{id}</h2>
                        <h3> {title} </h3>
                        <p>{body}</p>
                    </li>
                )
            })}
        </ol>
    )
}




export default Getaxios