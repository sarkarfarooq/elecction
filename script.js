var showName = document.querySelector(".txt");
var validFname = document.getElementById("validFname");
var validLname = document.getElementById("validLname");
var validAge = document.getElementById("validAge");

function checkEmpty() {
  var getFname = document.getElementById("Fname").value.length;
  var getLname = document.getElementById("Lname").value.length;
  var getAge = document.getElementById("age").value.length;

  if (getFname === 0 || getFname < 3) {
    validFname.innerHTML = "Please enter your first name";
  } else if (getFname > 2) {
    validFname.innerHTML = "";
  }

  if (getLname === 0 || getLname < 3) {
    validLname.innerHTML = "Please enter your last name";
  } else if (getLname > 2) {
    validLname.innerHTML = "";
  }

  if (getAge === 0) {
    validAge.innerHTML = "Please enter your age";
  } else if (getAge > 0) {
    validAge.innerHTML = "";
  }

  if ((getFname, getLname, getAge === 0)) {
    showName.innerHTML = "Please fill out the fields";
  } else if (getFname > 2 && getLname > 2 && getAge > 0) {
    chekName();
  }
}

function chekName() {
  var getFname = document.getElementById("Fname").value;
  var getLname = document.getElementById("Lname").value;
  var getAge = document.getElementById("age").value * 1;
  var getID = document.getElementById("txt2");
  split = getFname.split("");
  firstLetter = split[0].toUpperCase();

  if (
    !isNaN(getAge) &&
    getAge >= 18 &&
    getAge < 101 &&
    getAge == Math.floor(getAge)
  ) {
    showName.innerHTML =
      "congratulations! dear " + getFname + " " + getLname + " you can vote.";
    getID.innerHTML =
      "here is your id number : " +
      firstLetter +
      (Math.floor(Math.random() * 1000000000) + 1);
    return this.getAge;
  } else if (getAge < 1) {
    validAge.innerHTML = "barez to heshta ladaik nabuyt";
    getID.innerHTML = "";
    showName.innerHTML = "";
  } else if (isNaN(getAge)) {
    validAge.innerHTML = "Please enter a number";
    getID.innerHTML = "";
    showName.innerHTML = "";
  } else if (getAge != Math.floor(getAge)) {
    validAge.innerHTML = "Please don't use points for your age";
    getID.innerHTML = "";
    showName.innerHTML = "";
  } else {
    showName.innerHTML =
      "sorry dear " + getFname + " " + getLname + " you can not vote.";
    getID.innerHTML = "";
  }
}
