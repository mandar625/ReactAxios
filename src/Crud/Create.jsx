import Axios from 'axios'

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


const Create = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post("https://641421fb50dff8e8fe460642.mockapi.io/Crud", {

            e_name: name,
            e_age: age,
            e_email: email


        }).then(() => {
            navigate("/")
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <div className='mb-2 mt-2' >

                    <Link to="/" > <button className='btn btn-primary' >Read data</button> </Link>
                </div>
                <div className="bg-primary p-4 text-center">Create data</div>

                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor=""> Enter your Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Enter your Age</label>
                        <input
                            type="number"
                            placeholder="Enter Age"
                            value={age}
                            className="form-control"
                            onChange={(e) => setAge(e.target.value)}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> Enter your E-mail</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <br />

                    <div className="d-grid">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Create;
