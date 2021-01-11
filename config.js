const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    port: process.env.PORT,
    allowedIP: process.env.IP_WHITELIST
}