function next(n) {
  document.getElementById(`screen${n}`).classList.add("hidden");
  document.getElementById(`screen${n+1}`).classList.remove("hidden");
}

function yes() {
  alert("okay this just made my day 💗");
}

function no() {
  alert("all good 😌 still glad i asked");
}
