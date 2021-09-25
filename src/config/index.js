module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    db: {
        uri: process.env.MONGOSOURCE || 'mongodb://localhost:27017/node-crud-api'
    }
}