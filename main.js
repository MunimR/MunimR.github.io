function load() {
    var c = document.querySelectorAll(".ani");
    for (const x of c) {
        x.classList.add("loaded");
    }
}


window.onload = function(){
    load();
}