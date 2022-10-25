const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')
const courseDetail = require('./data/courseDetail.json')

app.get('/', (req, res) => {
    res.send('loading data from server')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})
// app.get('/courses/:id', (req, res) => {
//     const id = req.params.id;
//     const individualCourse = courses.find(course => course.id === id);
//     res.send(individualCourse);
// })

app.listen(port, () => {
    console.log(`listening from port ${port}`)
})