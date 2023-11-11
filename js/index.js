var a = 1;
// document.getElementById("nav-bar").style.display = "none";
function navchange() {
  if (a == 1) {
    document.getElementById("nav-bar").style.display = "block";
    a = 0;
  } else {
    document.getElementById("nav-bar").style.display = "none";
    a = 1;
  }
}
