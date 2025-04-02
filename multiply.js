//Function that changes the elements content
//document.getElementById("hiddenAnswer(which ever number is the function)") means HTML element found by id from the HTML code 
//.style.display means we check the HTML element's style and display property
//"block" means that the element becomes visible
function revealAnswer_10() {
    document.getElementById("hiddenAnswer10").style.display = "block"
}

function revealAnswer_11() {
    document.getElementById("hiddenAnswer11").style.display = "block"
}

function revealAnswer_12() {
    document.getElementById("hiddenAnswer12").style.display = "block"
}
//document.getElementById("home1") means HTML element found by id from the HTML code
//.addEventListener("click",...) attaches a click event listener to ‘home1’ when the button is pressed 
//() => { history.back(); } executes the function to go back to the home page when the element is clicked 
document.getElementById("home1").addEventListener("click", () => {
    history.back();
  });



  