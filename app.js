let uname = document.getElementById("uname");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");
let address = document.getElementById("address");
let dob = document.getElementById("dob");
let gen = document.getElementById("gen");
let number = document.getElementById("num");
let image = document.getElementById("myimg");

function sub() {
  var uval = uname.value;
  var emval = email.value;
  var pval = pass.value;
  var cpval = cpass.value;
  var adval = address.value;
  var dobval = dob.value;
  var genval = gen.value;
  var numval = number.value;
  var imgval = image.value;

  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (uval.length == "" || emval.length == "" || pval.length == "" || cpval.length == "" || adval.length == "" || genval.length == "" || numval.length == "") {
    alert("Please fill propely");
  } 
  
  else if (uval.length < 5) {
    alert("Please fill atleast 5 characters in username");
  } 

  else if(pval !== cpval){
    alert("your password donot match");
  }

  else if (numval.length < 11 || numval.length >11) {
    alert("Please enter valid mobile number");
  } 

  else if(pval.length > 8){
    alert('Max of 8');

}
else if(!pval.match(numbers)){
    alert('please add 1 number');

}
else if(!pval.match(upperCaseLetters)){
    alert('please add 1 uppercase letter');

}
else if(!pval.match(lowerCaseLetters)){
    alert('please add 1 lovercase letter');
}
  
  
  
  else {
    let info = {
      username: uval,
      email: emval,
      pass: pval,
      address: adval,
      DOB: dobval,
      gender: genval,
      number: numval,
      image1:imgval
    };

    let data = JSON.stringify(info);
    window.localStorage.setItem("User-Data", data);
    // window.location.assign("dashboard.html");
    window.location.assign("signin.html");
  }

}

function sign() {
  let getdatainfo = window.localStorage.getItem("User-Data");
  let getinfo = JSON.parse(getdatainfo);

  var u = getinfo.username;
  var p = getinfo.pass;

  let uname1 = document.getElementById("uname1");
  let pass1 = document.getElementById("pass1");

  let uval1 = uname1.value;
  let pval1 = pass1.value;

  if (uval1 === u && pval1 === p) {
    alert("welcome");
    window.location.assign("dashboard.html");
  } 
  
  else {
    alert("wrong details not match");
  }

  

}
