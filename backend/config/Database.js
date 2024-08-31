import { Sequelize } from "sequelize";

const db = new Sequelize('data_mahasiswa','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;