import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
const [nim, setNim] = useState("");
const [name, setName] = useState("");
const [kelas, setKelas] = useState("TI-Ganjil");
const navigate = useNavigate();
const {id} = useParams();

const getUserById = useCallback(async () =>{
    const response = await axios.get(`http://localhost:5001/users/${id}`);
    setNim(response.data.nim);
    setName(response.data.name);
    setKelas(response.data.kelas);
},[id]);

useEffect(() => {
    getUserById();
},[getUserById]);

const updateUser = async (e) =>{
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5001/users/${id}`,{
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
            <form onSubmit={updateUser}>
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
                        Perbaharui
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditUser;