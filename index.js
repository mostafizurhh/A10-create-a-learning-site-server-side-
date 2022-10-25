const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('loading data from server')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const individualCourse = courses.find(course => course.id === id);
    res.send(individualCourse);
})

app.listen(port, () => {
    console.log(`listening from port ${port}`)
})