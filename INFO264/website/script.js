// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()}; // set an event listener that detects when the user scrolls the window

// scrollTop returns the number of pixels that an element has been scrolled vertically. In our case, the scroll top of the window starts at 0, and increases as the user scrolls down.
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("logo").style.fontSize = "35px";
  }
}
