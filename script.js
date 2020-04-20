var max = 0;

var comic = document.getElementById("comic");
var cover = document.getElementById("cover");
var num = document.getElementById("num");
var nummax = document.getElementById("numMax");
var numinput = document.getElementById("numInput")
var pagenum = 0;
var choose = "";
var chapter = false;


num.innerHTML = pagenum;
nummax.innerHTML = max;
document.getElementById("comic").className = "small";
document.getElementById("numInput").max = max; 

function next(){
    if(pagenum < max){
        pagenum = pagenum + 1;
        comic.src = "img/" + choose + "/" + pagenum + ".jpg";
        num.innerHTML = pagenum;
        numinput.value = pagenum;   
    }
    else if(chapter === true){
      Chapter();
    }

    else {
      booksClosed()
    }
    
}

function prev(){
    if(pagenum > 1){
        pagenum = pagenum - 1;
        comic.src = "img/" + choose + "/" + pagenum + ".jpg";
        num.innerHTML = pagenum; 
        numinput.value = pagenum;   
    }

    else if(chapter === true){
      Chapter();
    }

    else{
        comic.disabled = true;
    }
}



function zoom(){
    var x = document.getElementById("comic");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "small") {
      x.className = "big";
    } else {
      x.className = "small";
    }
  }


  function books(){
    var x = document.getElementById("books");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "open") {
      x.className = "closed";
    } else {
      x.className = "open";
    }
  }

  function booksOpen(){
    var x = document.getElementById("books");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "open") {
      x.className = "closed";
    } 
  }

  function booksClosed(){
    var x = document.getElementById("books");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "closed") {
      x.className = "open";
    } 
  }




  function myFunction() {
    var x = numinput.value;
    if(x > max){ x = max}
    pagenum = x;
    num.innerHTML = pagenum;
    comic.src = "img/" + choose + "/" + pagenum + ".jpg";
    modal.style.display = "none";
  }









var modal = document.getElementById("myModal");
var chapters = document.getElementById("chapters");

var closemodal = document.getElementById("myModal");;

// Get the <span> element that closes the modal




// When the user clicks on the button, open the modal
function Aller(){
  modal.style.display = "block";
  closemodal = modal;
}

function Chapter() {
  chapters.style.display = "block";
  closemodal = chapters;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == closemodal) {
    closemodal.style.display = "none";
  }
}









  



