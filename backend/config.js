module.exports = {
    MONGODB_URL: process.env.MONGOBD_URL || 'mongodb://localhost:27017/Ecommerce',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
}