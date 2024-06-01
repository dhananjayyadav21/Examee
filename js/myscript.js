class User{
    constructor(firstname, lastname, email, mobilenumber, password) {
        this.id = GetNextaaId("User");
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.mobilenumber = mobilenumber;
        this.password = password;
    }
}

function checkLogin(userName, password) {
    const listOfStudents = GetAllStudents(); // Assuming this function returns an array of student objects
    // Find a student with matching credentials
    const foundStudent = listOfStudents.find(student => student.email.toLowerCase() === userName.toLowerCase() && student.password === password);

    if (foundStudent) {
        localStorage.setItem("loginUser", JSON.stringify(foundStudent));
        return true;
    }

    return false;
}


function AddData(data, table) {
    let ListOfData = GetAllData(table);
    ListOfData.push(data); // Use push() to add the student to the list
    localStorage.setItem(table, JSON.stringify(ListOfData));
}


function GetAllData(table) {

    let ListOfStudent = localStorage.getItem(table);

    if (ListOfStudent == null || ListOfStudent == undefined) {
        ListOfStudent = [];
    } else {
        ListOfStudent = JSON.parse(ListOfStudent);
    }

    return ListOfStudent;
}

function GetNextId(table) {
    let ListOfStudent = GetAllData(table);
    if (ListOfStudent.length == 0) {
        return 1;
    }
    ListOfStudent = ListOfStudent.sort((a, b) => a.id > b.id);
    return ListOfStudent[ListOfStudent.length - 1].id + 1;
}

function fileSaveData(imgTag, callback) {
    if (imgTag.files.length > 0) {
        var file = imgTag.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            var imageUrl = event.target.result;
            console.log(imageUrl);
            callback(imageUrl);
        };
    }
}

function removeData(id, table) {
    let ListOfData = GetAllData(table);
    const data = ListOfData.find(d => d.id == id);

    const index = ListOfData.indexOf(data);
    if (index > -1) { // only splice array when item is found
        ListOfData.splice(index, 1); // 2nd parameter means remove one item only
    }
    localStorage.setItem(table, JSON.stringify(ListOfData));

    window.location.reload();
}



function getLoginUser() {
    return JSON.parse(localStorage.getItem("loginUser"));
}