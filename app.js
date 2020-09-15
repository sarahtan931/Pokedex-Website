function checkNum() {
    var x = document.forms["numForm"]["fNum"].value;
    if (x < 0) {
      alert("Please enter a valid number");
      return false;
    }
    if (x > 20) {
        alert("Please enter a valid number");
        return false;
      }
  }

  function checkName() {
    var x = document.forms["nameForm"]["fName"].value;
    if (x.length == 0) {
      alert("Please enter a valid number");
      return false;
    }
   
  }

