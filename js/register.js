function register() {
    var username = document.ElementById("username").value;
    var name = document.ElementById("name").value;
    var gender = document.ElementById("gender").value;
    var password = document.ElementById("password").value;



    if(username === "" || name === "" || gender === "" || password === "") {
        document.getElementById("error").innerHTML = "All textbox is required"
    }
    
    else{
        document.getElementById("error").innerHTML = "Welcome " + name;
    }
}

function button() {
    alert("Registered Successfully")
}