const students = [
    {
        Name: "Salman Ahmed",
        Marks: "39%",
        Class: "3rd",
        Address: "India"
    },
    {
        Name: "Riya Sharma",
        Marks: "85%",
        Class: "10th",
        Address: "123, ABC colony, Delhi"
    },
    {
        Name: "Rohan Patel",
        Marks: "79%",
        Class: "12th",
        Address: "456, XYZ Street, Mumbai"
    },
    {
        Name: "Priya Sharma",
        Marks: "90%",
        Class: "8th",
        Address: "789, PQR Nagar, Bangalore"
    },
    {
        Name: "Kushal Agrawal",
        Marks: "85%",
        Class: "11th",
        Address: "India"
    },
    {
        Name: "Ankit Gupta",
        Marks: "91%",
        Class: "5th",
        Address: "101, LMN Road, Kolkata"
    },
    {
        Name: "Surya Yadav",
        Marks: "52%",
        Class: "9th",
        Address: "753, DEF Avenue, Chennai"
    },
    {
        Name: "Devdas Mishra",
        Marks: "74%",
        Class: "11th",
        Address: "369, GHI Lane, Hyderabad"
    },
    {
        Name: "Rajesh Singhania",
        Marks: "78%",
        Class: "2nd",
        Address: "555, VWX Street, Jaipur"
    },
    {
        Name: "Ramdev Vishnoi",
        Marks: "84%",
        Class: "5th",
        Address: "444, STU Colony, Pune"
    },
    {
        Name: "Pooja Mishra",
        Marks: "99%",
        Class: "10th",
        Address: "159, QWE Street, Rajasthan"
    },
    {
        Name: "Kapil Srivastav",
        Marks: "82%",
        Class: "9th",
        Address: "ERT Colony, Tripura"
    }
]

const container = document.getElementById("student");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchBtn");
const searchText = document.getElementById("searchResultText");

function displayStudents(student) {
    container.innerHTML = student.map(student => `
    <div class="card">
        <p>Student Name: ${student.Name}</p>
        <p>Marks: ${student.Marks}</p>
        <p>Class: ${student.Class}</p>
        <p>Address: ${student.Address}</p>
    </div>
    `).join("");
}

displayStudents(students);

function searchStudents() {
    const value = searchInput.value.trim().toLowerCase();

    const filteredStudent = students.filter(student =>
        student.Name.toLowerCase().startsWith(value)
    );

    if (value === "") {
        searchText.textContent = "";
    }
    else {
        if (filteredStudent.length === 0) {
            searchText.textContent = `No Result Found for ${searchInput.value.trim()}...`;
        } else {
            searchText.textContent = `Search Results for ${searchInput.value.trim()}...`;
        }
    }
    displayStudents(filteredStudent);
}

searchButton.addEventListener("click", searchStudents);