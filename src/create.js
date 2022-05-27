import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

import { Link } from "react-router-dom";
const readUrl ="http://localhost/lv7/src/dodavanje.php"

function Add()
{
    

    const [inputs, setInputs] = useState({}); 
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: "post",
            url: readUrl,
            data: 
            {
                "Proizvodac":inputs.Proizvodac,
                "Naziv": inputs.Naziv,
                "Model":inputs.Model,
                "Kolicina":inputs.Kolicina,
                "Cijena":inputs.Cijena
            },
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });  
           
            navigate('/');
        }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        }       
return(
<div>

    <nav className='navigacija'>
  <h1 className='App'>Dodavanje</h1>
  <Link className='button' to="/">Početna</Link>
  </nav>
  
<div className="container w-25 p-3">
<form className="form" onSubmit={handleSubmit}> 
<div className="form-group">
    <label >Proizvođač</label>
    <input type="text" required className="form-control" 
    onChange={handleChange}
    name="Proizvodac"
    value={inputs.Proizvodac || ""} 
    />
  </div>
  <div className="form-group">
    <label>Naziv</label>
    <input type="text" required className="form-control" 
    onChange={handleChange}
    name="Naziv"
    value={inputs.Naziv || ""} 
    />
  </div>
  <div className="form-group">
    <label >Model</label>
    <input type="text" required className="form-control" 
    onChange={handleChange} 
    name="Model"
    value={inputs.Model || ""} 
    />
  </div>
  <div className="form-group">
    <label >Kolicina</label>
    <input type="number" required className="form-control" 
    onChange={handleChange} 
    name="Kolicina"
    value={inputs.Kolicina || ""} 
    />
  </div>
  <div className="form-group">
    <label >Cijena</label>
    <input type="text" required className="form-control" 
    name="Cijena"
    value={inputs.Cijena || ""} 
    onChange={handleChange} placeholder="Unos u kn" />
  </div>
  <div className="form-group">
  <button type="submit" className="btn btn-primary mt-1 end-0">Submit</button>
  </div>
</form>
</div>
</div>
);
}

export default Add;