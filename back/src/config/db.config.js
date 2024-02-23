module.exports = {
  uri: process.env.MONGODB_URI,
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
}
