import Axios from 'axios'
import React, { useState } from 'react'

function Postaxios() {
    const [mytitle, setMytitle] = useState("");
    const [mybody, setMybody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: mytitle,
            body: mybody
        }).then(( response) => {

            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })

    }
    return (
        <>

            <form onSubmit={handleSubmit} >
                
                
                <label htmlFor=""> enter title </label>
                <input type="text" name='title' value={mytitle} onChange={(e) => setMytitle(e.target.value)} />

                <br />

                <label htmlFor=""> enter body </label>
                <input type="text" name='body' value={mybody} onChange={(e) => setMybody(e.target.value)} />
                <br />

                <input type="submit" value="post" />



            </form>


        </>
    )
}

export default Postaxios