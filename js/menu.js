function menu() {
  var x = document.getElementById("navmenu");
  if (x.className === "navbar is-closed") {
    x.className = " navbar is-open";
  } else {
    x.className = "navbar is-closed";
  }
}
