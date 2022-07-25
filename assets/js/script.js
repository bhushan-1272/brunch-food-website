// --------------- Scroll To Top Starts Here --------------- // 
let myButton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

scrollFunction = () => {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display= "block";
  } else {
    myButton.style.display= "none";
  }
};

topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
// --------------- Scroll To Top Ends Here --------------- // 


// --------------- Year Starts Here --------------- // 
let newYear = new Date().getFullYear();
console.log("New Year :-", newYear);

document.getElementById("year").innerHTML = newYear;
// --------------- Year Ends Here --------------- // 