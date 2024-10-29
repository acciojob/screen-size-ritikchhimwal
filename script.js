//your JS code here. If required.
function updateScreenSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById("screen-size").textContent = `Width: ${width} and Height: ${height}`;
}

updateScreenSize();

window.addEventListener("resize", updateScreenSize);
