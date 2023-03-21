import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'



const Update = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const navigate  = useNavigate()

    useEffect(()=>{

        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setEmail(localStorage.getItem('email'))


    },[])

    const onHandleUpdate = (e) =>{
        e.preventDefault()
        Axios.put(`https://641421fb50dff8e8fe460642.mockapi.io/Crud/${id}`, {
            e_name: name,
            e_age: age,
            e_email: email

        }).then(()=>{
            navigate("/")
        }).catch((err)=>{
            console.log(err);
        })

    }

    return (
        <div className="row">
            <div className="col-md-4">
                <div className='mb-2 mt-2' >

                    <Link to="/" > <button className='btn btn-primary' >Read data</button> </Link>
                </div>
                <div className="bg-primary p-4 text-center">Update data</div>

                <form onSubmit={onHandleUpdate} >
                    <div className="form-group">
                        <label htmlFor=""> Enter your Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                           
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Enter your Age</label>
                        <input
                            type="number"
                            placeholder="Enter Age"
                            className="form-control"
                            value={age}
                            onChange={(e)=> setAge(e.target.value)}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Enter your E-mail</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="form-control"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <br />

                    <div className="d-grid">
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Update