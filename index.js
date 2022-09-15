let getdatainfo = window.localStorage.getItem("User-Data");
let getinfo = JSON.parse(getdatainfo);

var name1 = document.getElementById("name");
var emaill = document.getElementById("emaill");
var address1 = document.getElementById("address1");
var number1 = document.getElementById("number1");
var gender1 = document.getElementById("gender1");
var dob1 = document.getElementById("dob1");
var img=document.getElementById("img");

name1.innerText = `UserName:${getinfo.username}`;
emaill.innerText = `Email:${getinfo.email}`;
address1.innerText = `Address:${getinfo.address}`;
number1.innerText = `Mobile Number:${getinfo.number}`;
gender1.innerText = `Gender:${getinfo.gender}`;
dob1.innerText = `Date of Birth:${getinfo.DOB}`;


function logout() {
    localStorage.clear();
    window.location.assign("signin.html");
    
}

var main=document.getElementById("main");

function profile() {
    main.style.display="block";
}


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}