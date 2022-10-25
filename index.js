const express = require('express') 
const cors = require('cors')
const app = express()
const port =process.env.PORT || 5000


const courses = require('./data/course.json')

app.use(cors())


app.get('/', (req, res) => { 
  res.send('Innovation-Hub is running') 
})


app.get('/courses', (req, res) => {
    res.send(courses)
})

 
app.get(`/course/:id`, (req, res) => {
    const id = req.params.id;
    const course = courses.find(cr => cr.id === id)
    res.send(course)
    console.log(id, 'id', hotel);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})