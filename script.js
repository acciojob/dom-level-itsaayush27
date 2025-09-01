//your JS code here. If required.
window.onload = function () {
  // Get the element with id="level"
  const target = document.getElementById("level");

  let level = 0;
  let current = target;

  // Walk up the DOM tree until no parent left
  while (current) {
    level++;
    current = current.parentElement;
  }

  // Show the result
  alert("The level of the element is: " + level);
};
