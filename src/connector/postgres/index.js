require('dotenv').config()

// const pg = require('pg')
// const { Client } = pg

// const postgresQuery = async (sql) => {
//   const client = new Client({
//     user: process.env.POSTGRES_USER,
//     host: process.env.POSTGRES_HOST,
//     database: process.env.POSTGRES_DB,
//     password: process.env.POSTGRES_PWD,
//     port: process.env.POSTGRES_PORT,
//   })
//   client.connect()

//   try {
//     return await client.query(sql)
//   } catch (error) {
//     throw error
//   } finally {
//     client.end()
//   }
// }

// /**
//  * Test
//  */
// const __test__ = async () => {
//   try {
//     let res = await postgresQuery(
//       `select * from information_schema.tables where table_schema = 'public';`,
//     )
//     console.log('__test__ postgresQuery tables :>> ', res.rows)
//   } catch (error) {
//     console.log('__test__ postgresQuery error :>> ', error.message)
//   }
// }
// // __test__()

// module.exports = postgresQuery
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PWD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  },
  { timestamps: false },
)

const connection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

module.exports = connection
