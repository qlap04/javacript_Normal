

var courseAPI = "http://localhost:3000/courses"

function start() {
    getCourses(renderCourses)
    hanldeCreateForm()
}

//start
start()

//function

function getCourses(callback) {
    fetch(courseAPI)
        .then((respond) => { return respond.json() })
        .then(callback)
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(course => {
        return `<li>
                    <h4>${course.title}</h4>
                    <p>${course.star}</p>
                 </li>`
    })
    listCoursesBlock.innerHTML = htmls.join('')
}


function hanldeCreateForm() {
    var createBtn = document.querySelector('#create')
    createBtn.addEventListener('click', () => {
        var course = document.querySelector('input[name="course"]').value
        var star = document.querySelector('input[name="star"]').value
        var starAsNumber = parseFloat(star)
        var dataForm = {
            course: course,
            star: starAsNumber
        }
        createCourse(dataForm, getCourses(renderCourses))
    })

}

function createCourse(data, callback) {
    fetch('http://localhost:3000/courses', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', // Định dạng dữ liệu JSON
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(callback)
        .catch((error) => console.log(error))
}