// mongo interaction library
const mongoos = require('mongoose')

// connect to database in the env
const connectDB = async () => {
    try {
        const conn = await mongoos.connect(process.env.MONGO_URI)
        console.log(`MongoDb connected:  `, conn.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB