import { Sequelize } from "sequelize";

const sequelize = new Sequelize('my_database', 'root', '', {})
console.log(sequelize)