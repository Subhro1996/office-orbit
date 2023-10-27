import { Sequelize } from "sequelize"

    const db = new Sequelize('office_orbit', 'root', '', {
        host: "localhost",
        dialect: "mysql",
    })

export default db