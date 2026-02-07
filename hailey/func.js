
document.addEventListener("DOMContentLoaded", function() {
  console.log("Onload!")
  var Cheese = document.getElementById("cheese")
  if (localStorage.getItem("stolen")){
  Cheese.src = "/hailey/content/rat_letter.png";
  Cheese.style.scale = 2;
  Cheese.classList.add("note");
  console.log("Someone has been here before")
  }
  sleep(15000).then(() => {
    if (!localStorage.getItem("stolen")){
      steal()
    }
  });
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("visibilitychange", function() {
    if (document.hidden){
        console.log("Uh oh")
        if (!localStorage.getItem("stolen")){
        steal()
        }
    } else {
        console.log("In the clear")
    }
});

function steal(){
  var Rat = document.getElementById("rat")
  var Cheese = document.getElementById("cheese")
  Rat.style.display = "block";
  sleep(2500).then(() => {
    //Cheese.style.display = "none";
    Cheese.src = "/hailey/content/rat_letter.png";
    Cheese.style.scale = 2;
    Cheese.classList.add("note");
    localStorage.setItem("stolen","yes")
  });
};

function notedisplay(){
  var note = document.getElementById("note")
  note.style.zIndex = 30;
}