const checkElement = async selector => {
    while ( document.querySelector(selector) === null) {
        await new Promise( resolve =>  requestAnimationFrame(resolve) )
    }
    return document.querySelector(selector); 
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
function load() {
    var h = location.hash;
    if (h == "") {
        h = "#home";
    }
    checkElement(h).then((selector) => {
        var c = document.querySelector(h).querySelectorAll(".ani");
        document.title = capitalizeFirstLetter(h.substring(1));

        for (const x of c) {
            x.classList.add("loaded");
        }
    });
}

function email() {
    navigator.clipboard.writeText("munimrahm@gmail.com");
    alert("My email: munimrahm@gmail.com has been copied to your clipboard")
}

window.onhashchange = load;

window.onload = load;
