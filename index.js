let refresh = document.getElementById("refresh");
refresh.onclick = updateLook()
let index = document.getElementById("index");
index.onclick = function() {
    // GET CSV
    updateLook()
}