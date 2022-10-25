const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./data/courses.json')
const categories = require('./data/categories.json')

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

app.get('/categories', (rew, res) => {
    res.send(categories)
})
app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const course_category = courses.filter(course => course.category_id === id)
    res.send(course_category)
})

app.listen(port, () => {
    console.log(`listening from port ${port}`)
})