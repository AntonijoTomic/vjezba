import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Ucitaj from './Contact'
import Add from './create'
import Edit from './update'
require("es6-promise").polyfill();
require("isomorphic-fetch");
export default function App(){
  const [q, setQ] = useState("");
  const [data, setData] = useState("");
  useEffect(()=>{
fetch("http://localhost/react-app/src/contacts.php")
.then(response => response.json())
.then(json => setData(json));
  },[])
 function search(rows)
 {
   return rows.filter((row) => row.Naziv.toLowerCase().indexOf(q) >-1 ||row.Proizvodac.toLowerCase().indexOf(q) >-1||row.Model.toLowerCase().indexOf(q) >-1)
 
  }
 
    return(
      
     <div> 
   
 
        
        <BrowserRouter><Link className='btn btn-lg btn-primary' to="/create">Dodaj</Link>
        <input type="text"value={q} onChange={(e) => setQ(e.target.value)}></input>
    <Routes>
    <Route  path="/" element={<Ucitaj data={search(Array.from(data))} />} />
    <Route  path="/create" element={<Add />} />
    <Route path='/update/:ID' element={<Edit />}/>
    </Routes>
    </BrowserRouter></div>
   
    );
}


