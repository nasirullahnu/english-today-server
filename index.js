const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/category.json')
const courseDetails = require('./data/course.json')


app.get('/', (req, res) => {
    res.send('course is running');
});

app.get('/courses', (req, res)=> {
    res.send(courses)
})



// app.get('/details/:id', (req, res)=>{
//     const id = req.params.id;
//     const selectedCourse = courseDetails.find(course => course.id === id);
//     res.send(selectedCourse)
// })

app.listen(port, () => {
    console.log('course running on port', port)
})