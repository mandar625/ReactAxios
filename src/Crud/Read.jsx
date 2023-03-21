import Axios from 'axios'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    function getData() {

        setLoading(true);

        Axios.get("https://641421fb50dff8e8fe460642.mockapi.io/Crud").
            then((response) => {

                setData(response.data)
                console.log(response.data)

                setLoading(false)
            })


    }
    function handleDelete(id) {
        Axios.delete(`https://641421fb50dff8e8fe460642.mockapi.io/Crud/${id}`)
            .then(() => {
                getData()

            })

    }
    function setDataToLocal(id, name ,age, email){


        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
        localStorage.setItem('email', email)
    }

    useEffect(() => {
        getData()

    }, [])


    return (
        <>

            <div className="row">
                <div className="col-md-12">
                    <div className='mb-2 mt-2' >

                        <Link to="/create" > <button className='btn btn-primary' >Create data</button> </Link>
                    </div>
                    <table className='table table-bordered  table-hover' >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>


                            {loading ? (<p> Loading...... please Wait.... </p>) :


                                (data.map((res) => {

                                    return (
                                        <>
                                            <tr>
                                                <td>{res.id}</td>
                                                <td>{res.e_name}</td>
                                                <td>{res.e_age}</td>
                                                <td>{res.e_email}</td>
                                                <td>
                                                    <Link to="/update" ><button  onClick={()=> setDataToLocal(res.id,res.e_name,res.e_age,res.e_email)} >Edit</button></Link>
                                                </td>
                                                <td>
                                                    <button onClick={() =>{if(window.confirm("are you sure")){
                                                         handleDelete(res.id)
                                                    }}} >Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                }))
                            }


                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default Read