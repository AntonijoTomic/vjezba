
import React from "react";
import { useState , useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Input from "./App"
const readUrl ='http://localhost/react-app/src/contacts.php';


function Ucitaj({data}){

    let dataArr = Array.from(data);
    const columns =data[0] && Object.keys(data[0]);
    const [artikli, setArtikl] = useState([]);
    let navigate = useNavigate();
    let {ID} = useParams();
    useEffect(() => {
        getArtikli();
        }, []);

        async function getArtikli() {
            try {
              const response = await axios.get(readUrl);
              setArtikl(response.data)
            } 
            catch (error) {
              console.error(error);
            }
          }
          async function DeleteArtikl(idspecc){
            console.log(idspecc);
            if(window.confirm("Are you sure want to delete?")) {
            const response = await axios.delete(`http://localhost/react-app/src/brisanje.php`, {
              data:idspecc
            });
            setArtikl(artikli.filter((p) => p.id!==idspecc));
            console.log(response);}
           window.location.reload();
          }
        

    return (
        <>
              <table className="table table-striped">
              <thead>
              <tr>
                    {data[0] && columns.map((heading) =><th>{heading}</th>)}
                  </tr>
              </thead>
              <tbody>
              {dataArr.map(row => <tr>
                     {
                         columns.map(column => <td>{row[column]}</td>)

                     }
                     <Link to={`/update/${row.Id}`} className="btn btn-dark">Edit</Link>
                     <td><button className='btn btn btn-dark' onClick={() => DeleteArtikl(row.Id)}>Obriši</button></td> 
                 </tr>)}
              </tbody>
              </table>
        </>
        )
}



export default Ucitaj;