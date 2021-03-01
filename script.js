const logo = document.getElementById("search button")

function thankYou() {
    alert("Thank you for using Google!");
}
//This method also works
/*logo.addEventListener("click", function() {
    alert("Thank you for using Google!");
});*/

logo.addEventListener("click", thankYou);


