function toggleElement() {
  var selector = document.getElementById("selector");
  var selectedElementId = selector.value;

  // Hide all elements
  var elements = document.getElementsByClassName("element");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }

  // Show selected element
  document.getElementById(selectedElementId).style.display = "block";

  // Change background color of dropdown menu on selection
  selector.style.backgroundColor = "skyblue";
}
