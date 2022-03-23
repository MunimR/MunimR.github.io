const checkElement = async selector => {
    while ( document.querySelector(selector) === null) {
      await new Promise( resolve =>  requestAnimationFrame(resolve) )
    }
    return document.querySelector(selector); 
  };
  

function load() {
    var h = location.hash;
    if (h == "") {
        h = "#home";
    }
    checkElement(h).then((selector) => {
        var c = document.querySelector(h).querySelectorAll(".ani");

    document.title = h;

    for (const x of c) {
        x.classList.add("loaded");
    }
      });

    
}


window.onhashchange = load;

window.onload = load;
