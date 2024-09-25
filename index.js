function formatStudentId(inputField) {
    const inputValue = inputField.value;
    let formattedValue = '';
    for (let i = 0; i < inputValue.length; i++) {
        const char = inputValue[i];
        if (i === 2) {
            formattedValue += '-';
        }
        if (!isNaN(char) && formattedValue.length < 7) {
            formattedValue += char;
        }
    }
    inputField.value = formattedValue;
}

function ageStudent(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2);
    }
    const age = Number(input.value);
    if (age < 1) {
        input.value = '';
    } else if (age > 99) {
        input.value = '99';
    }
    if (input.value.length === 1 && age < 1) {
        input.value = '';
    }
}


function validateText(inputField) {
    inputField.value = inputField.value.replace(/[^a-zA-Z\s]/g, '');
    inputField.value = inputField.value
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
}


// index.js
let students = [];

function saveData() {
    // Get the input values
    const studentId = document.getElementById("studentId").value;
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const section = document.getElementById("section").value;
    const email = document.getElementById("email").value;
  
    // Check if all input fields are filled
    const missingFields = [];
    if (studentId === "") missingFields.push("Student ID");
    if (firstName === "") missingFields.push("First Name");
    if (middleName === "") missingFields.push("Middle Name");
    if (lastName === "") missingFields.push("Last Name");
    if (age === "") missingFields.push("Age");
    if (gender === "") missingFields.push("Gender");
    if (section === "") missingFields.push("Section");
    if (email === "") missingFields.push("Email");
  
    if (missingFields.length > 0) {
      const errorMessage = "Please fill in the following fields: " + missingFields.join(", ");
      alert(errorMessage);
    } else {
      // Create a new student object
      const student = {
        id: studentId,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        age: age,
        gender: gender,
        section: section,
        email: email
      };
  
      // Add the student to the array
      students.push(student);
  
      // Store the array in local storage
      localStorage.setItem("students", JSON.stringify(students));
  
      // Add a new row with blank fields
      const tableBody = document.querySelector("tbody");
      const newRow = tableBody.insertRow();
      const newCell1 = newRow.insertCell();
      const newCell2 = newRow.insertCell();
      const newCell3 = newRow.insertCell();
      const newCell4 = newRow.insertCell();
      const newCell5 = newRow.insertCell();
      const newCell6 = newRow.insertCell();
      const newCell7 = newRow.insertCell();
      const newCell8 = newRow.insertCell();
  
      newCell1.innerHTML = "<input type='text' id='studentId' placeholder='Student ID' maxlength='7'>";
      newCell2.innerHTML = "<input type='text' id='firstName' placeholder='First Name'>";
      newCell3.innerHTML = "<input type='text' id='middleName' placeholder='Middle Name'>";
      newCell4.innerHTML = "<input type='text' id='lastName' placeholder='Last Name'>";
      newCell5.innerHTML = "<input type='number' id='age' placeholder='Enter Age' class='no-spinner'>";
      newCell6.innerHTML = "<select id='gender'><option value=''>Select</option><option value='Male'>Male</option><option value='Female'>Female</option><option value='Other'>Other</option></select>";
      newCell7.innerHTML = "<select id='section'><option value=''>Select</option><option value='BSIT '>BSIT</option><option value='BSCS'>BSCS</option><option value='BSIS'>BSIS</option></select>";
      newCell8.innerHTML = "<input type='email' id='email' placeholder='Email'>";
    }
  }