import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
const [nim, setNim] = useState("");
const [name, setName] = useState("");
const [kelas, setKelas] = useState("TI-Ganjil");
const navigate = useNavigate();

const saveUser = async (e) =>{
    e.preventDefault();
    try {
        await axios.post('http://localhost:5001/users',{
            nim,
            name,
            kelas
        }); 
        navigate("/")
    } catch (error){
        console.log(error);
    }
};

  return (
    <div className="columns mt-0 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className="field">
                    <label className="label">NIM</label>
                    <div className="control">
                        <input 
                          type="text" 
                          className="input" 
                          value={nim} 
                          onChange={(e)=> setNim(e.target.value)}
                          placeholder='NIM' 
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nama</label>
                    <div className="control">
                        <input type="text" 
                          className="input" 
                          value={name} 
                          onChange={(e)=> setName(e.target.value)}
                          placeholder='Nama' 
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Kelas</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select value={kelas} 
                            onChange={(e)=> setKelas(e.target.value)}>
                                <option value="TI-Ganjil">TI-Ganjil</option>
                                <option value="TI-Genap">TI-Genap</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button is-primary  
                        is-rounded'>
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser