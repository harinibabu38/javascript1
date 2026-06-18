// Variables
let studentName = "Alice";
let studentAge = 20;

// Object
let student = {
    name: studentName,
    age: studentAge,
    course: "Computer Science"
};

// Function
function displayStudentInfo(studentObj) {
    console.log("Name:", studentObj.name);
    console.log("Age:", studentObj.age);
    console.log("Course:", studentObj.course);
}

// Function call
displayStudentInfo(student);