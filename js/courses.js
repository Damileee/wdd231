const courses = [
  { code: 'WDD 130', name: 'Web Fundamentals', credits: 3, completed: true, type: 'WDD' },
  { code: 'WDD 131', name: 'JavaScript Basics', credits: 2, completed: true, type: 'WDD' },
  { code: 'WDD 231', name: 'Front-End Dev', credits: 1, completed: false, type: 'WDD' },
  { code: 'CSE 110', name: 'Intro to Programming', credits: 2, completed: false, type: 'CSE' },
  { code: 'CSE 210', name: 'Data Structures', credits: 3, completed: false, type: 'CSE' }
];

const courseList = document.getElementById('courseList');
const totalCredits = document.getElementById('totalCredits');

function renderCourses(filteredCourses) {
  courseList.innerHTML = '';
  let credits = 0;
  filteredCourses.forEach(course => {
    const div = document.createElement('div');
    div.className = 'course-item';
    if (course.completed) div.classList.add('completed');
    div.textContent = `${course.code} - ${course.name}`;
    courseList.appendChild(div);
    credits += course.credits;
  });
  totalCredits.textContent = `The total credits for courses listed above is ${credits}`;
}

function showAll() {
  renderCourses(courses);
}

function showWDD() {
  renderCourses(courses.filter(c => c.type === 'WDD'));
}

function showCSE() {
  renderCourses(courses.filter(c => c.type === 'CSE'));
}

showAll();