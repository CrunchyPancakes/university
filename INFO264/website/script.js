// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()}; // set an event listener that detects when the user scrolls the window

// scrollTop returns the number of pixels that an element has been scrolled vertically. In our case, the scroll top of the window starts at 0, and increases as the user scrolls down.
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.fontSize = "28px";
    document.getElementById("navbar").style.backgroundColor = "#272727";

    var x = document.getElementById("navbar"); // stores the navbar element inside a variable
    var y = x.getElementsByTagName("a"); // accesses the a tags within the navbar, and store them in an array
    var i; // for each a tag within the array, do something to it
    for(i = 0; i < y.length; i++){
      y[i].style.color = "#74D5DD";
    }
  } else {
    document.getElementById("logo").style.fontSize = "30px";
    document.getElementById("navbar").style.backgroundColor = "#009fb7";

    var x = document.getElementById("navbar"); // stores the navbar element inside a variable
    var y = x.getElementsByTagName("a"); // accesses the a tags within the navbar, and store them in an array
    var i; // for each a tag within the array, do something to it
    for(i = 0; i < y.length; i++){
      y[i].style.color = "#201d1e";
    }
  }
}


// function to change visibility of assignments
function showAssignment(num){
  document.getElementById("assign-view").style.display = "block";

  var headElement = document.getElementById("assign-heads");
  var headings = headElement.getElementsByClassName("assign-heading"); // stores the individual assignment headings in an array

  var i;
  for(i = 0; i < headings.length; i++){
      var id = i + 1
      if(num == id){
        document.getElementById("assign-"+id).style.display ="block";
      }
      else{
        document.getElementById("assign-"+id).style.display ="none";
      }
  }
}


// creates a line of text to display on the footer
window.onload = function(){
  var d = new Date();
  document.getElementById("footerText").innerHTML = "&copy; Matthew Tansley "+d.getFullYear();
}
