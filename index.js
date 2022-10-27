const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/category.json')
const courseDetails = require('./data/course2.json')


app.get('/', (req, res) => {
    res.send('course is running');
});

app.get('/courses', (req, res) => {
    res.send(courses)
})


app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '07') {
        res.send(courseDetails)
    }
    else {
        const category_course = courseDetails.filter(cd => cd.category_id === id);
        res.send(category_course)
    }

})

app.get('/details/:id', (req, res) => {
    const id = req.params.id
    const selectedcourse = courseDetails.find(course => course._id === id)
    res.send(selectedcourse)
})


// app.get('/details/:id', (req, res)=>{
//     const id = req.params.id;
//     const selectedCourse = courseDetails.find(course => course.id === id);
//     res.send(selectedCourse)
// })

app.listen(port, () => {
    console.log('course running on port', port)
})