const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const path = require('path')
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const cors =require('cors')


app.use(cors())
app.use(express.json())
app.use('/books',bookRoutes)
app.use('/authors',authorRoutes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://rgopikamuralik:wKukTmJpaFDgkdZo@cluster0.afg2mrx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  
}
