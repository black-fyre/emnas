  var slideIndex = 0;
	showDivs(slideIndex);
	carousel();
	
	function carousel() {
    var i;
    var x = document.getElementsByClassName("homeSlide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); 
	}
	

    function plusDivs(n) {
	  showDivs(slideIndex += n);
	}

	function currentDiv(n) {
 	 showDivs(slideIndex = n);
	}

	function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("homeSlide");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("w3-white");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("w3-white");
}
