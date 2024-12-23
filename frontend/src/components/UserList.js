import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './styles.css';



const UserList = () => {
const [users, setUser] = useState([]);

useEffect(()=>{
    getUsers();
},[]);

const getUsers = async () =>{
    const response = await axios.get('http://localhost:5001/users');
    setUser(response.data);
}

const deleteUser = async (id) =>{
    try{
        await axios.delete(`http://localhost:5001/users/${id}`);
        getUsers();

    } catch (error) {
        console.log(error);

    }
}

const handleDelete = (id) => {
    Swal.fire({
        title: 'Anda yakin?',
        text: "Data ini akan dihapus!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteUser(id);
            Swal.fire(
                'Terhapus!',
                'Data telah dihapus.',
                'success'
            );
        }
    });
};
  return (
    <div className="columns mt-0 is-centered">
        <div className="column is-half">
        <h2 className="title is-3 has-text-centered">Data Mahasiswa</h2>
        <h3 className="title is-4 has-text-centered">Jurusan Teknik Informatika</h3>
            <Link to={'add'} className='button is-primary  
                is-rounded'>Tambah Data</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Kelas</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.nim}</td>
                        <td>{user.name}</td>
                        <td>{user.kelas}</td>
                        <td>
                            <Link to={`edit/${user.id}`} className='button is-small is-info'>Edit</Link>
                            {/* <button onClick={()=> deleteUser(user.id)} className='delete is-medium'></button>  */}
                            <button onClick={() => handleDelete(user.id)} className='delete is-medium'></button>
                            
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList