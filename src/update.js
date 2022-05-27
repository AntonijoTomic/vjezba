import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, Link, useParams} from 'react-router-dom';

function Edit() {
    const navigate = useNavigate();
    const params = useParams();
    let Id = params.ID;
    const [Naziv, setNaziv] = useState("");
    const [Proizvodac, setProizvodac] = useState("");
    const [Model, setModel] = useState("");
    const [Cijena, setCijena] = useState("");
    const [Kolicina, setKolicina] = useState("");

    useEffect(()=> {
      getArtikl(Id);
    }, []);
  
    
    async function getArtikl(Id){
        try {
          const response = await axios.get(`http://localhost/react-app/src/contacts.php?id=${Id}`);
        setNaziv(response.data.Naziv);
        setProizvodac(response.data.Proizvodac);
        setModel(response.data.Model);
        setCijena(response.data.Cijena);
        setKolicina(response.data.Kolicina);
        } catch (error) { throw error;}    
      };

    const azurirajArtikl  = async (event) => {
        event.preventDefault();
        let AzuriranArtikl = {Naziv, Proizvodac, Model, Cijena, Kolicina};
        await UpdateArtikl(AzuriranArtikl)
      }

      const UpdateArtikl  = async (artiklObj) => {
        const noviArtikl = await axios.post(`http://localhost/react-app/src/azuriraj.php`,{
          nazivPHP: artiklObj.Naziv,
          proizvodacPHP: artiklObj.Proizvodac,
          modelPHP: artiklObj.Model,
          cijenaPHP: artiklObj.Cijena,
          kolicinaPHP: artiklObj.Kolicina,
          idPHP: Id
        });
      }
    const azuriraj = "Ažuriraj artikl";

    return(
        <div className='container'>
             <Link to={`/`} className="btn btn-primary btn-xs" onClick="window.location.reload();">POVRATAK</Link>
            <form onSubmit={azurirajArtikl}>
                <div className="row mt-3">
                    <label className="form-label col-sm-2">Unesite naziv artikla:</label>
                    <div className='col-sm-8'>
                        <input
                        className="form-control"
                        type="text"
                        value={Naziv}
                        onChange={(e) => setNaziv(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <label className="form-label col-sm-2">Unesite proizvođala artikla:</label>
                    <div className='col-sm-8'>
                        <input
                        className="form-control"
                        type="text"
                        value={Proizvodac}
                        onChange={(e) => setProizvodac(e.target.value)}
                        />
                    </div>
                </div>       
                <div className="row mt-3">
                    <label className="form-label col-sm-2">Unesite model artikla:</label>
                    <div className='col-sm-8'>
                        <input
                        className="form-control"
                        type="text"
                        value={Model}
                        onChange={(e) => setModel(e.target.value)}
                        />
                    </div>
                </div>       
                <div className="row mt-3">
                    <label className="form-label col-sm-2">Unesite cijenu artikla:</label>
                    <div className='col-sm-8'>
                        <input
                        className="form-control"
                        type="number"
                        value={Cijena}
                        onChange={(e) => setCijena(e.target.value)}
                        />
                    </div>
                </div>       
                <div className="row mt-3">
                    <label className="form-label col-sm-2">Unesite količinu artikla:</label>
                    <div className='col-sm-8'>
                        <input
                        className="form-control"
                        type="text"
                        value={Kolicina}
                        onChange={(e) => setKolicina(e.target.value)}
                        />
                    </div>
                </div>       
                <input className="btn btn-primary mt-3" type="submit" value={azuriraj} />

            </form>
        </div>
    )   
}


export default Edit;