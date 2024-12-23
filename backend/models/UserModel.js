import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    nim: DataTypes.INTEGER,
    name: DataTypes.STRING,
    kelas: DataTypes.STRING
},{
    freezeTableName:true
})

export default User;

(async()=>{
    await db.sync();
})();