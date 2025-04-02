//Function that changes the elements content
//document.getElementById("hiddenAnswer(which ever number is the function)") means HTML element found by id from the HTML code 
//.style.display means we check the HTML element's style and display property
//"block" means that the element becomes visible
function revealAnswer_7() {
    document.getElementById("hiddenAnswer7").style.display = "block"
}

function revealAnswer_8() {
    document.getElementById("hiddenAnswer8").style.display = "block"
}

function revealAnswer_9() {
    document.getElementById("hiddenAnswer9").style.display = "block"
}
//document.getElementById("home1") means HTML element found by id from the HTML code
//.addEventListener("click",...) attaches a click event listener to ‘home1’ when the button is pressed 
//() => { history.back(); } executes the function to go back to the home page when the element is clicked 
document.getElementById("home1").addEventListener("click", () => {
    history.back();
  });


