const express = require('express')
// const cors = require('cors') /* allow data policy */
const app = express();
const port = process.env.PORT || 5000;

// app.use(cors())

app.get('/', (req, res) => {
    res.send('this is server')
})

app.listen(port, () => {
    console.log(`listening from port ${port}`)
});