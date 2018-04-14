
function menu() {
  var x = document.getElementById("navmenu");
  if (x.className === "navbar") {
        x.className += " navdropdown";
    } else {
        x.className = "navbar";
    }
}
