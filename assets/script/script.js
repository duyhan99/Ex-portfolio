window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}


// scroll
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("#navbar-right a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("#navbar-right a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

// small nav

// function myNav(){
//   let n = document.getElementById('navbar');
//   if(n.className === "#navbar"){
//     document.getElementById("navbar-right").style.display = "block";
//   } else{
//     n.className = "#navbar"
//   }
// }

// var x = window.matchMedia("(max-width:768px)")

// function nav(x){
//   if(x.matches){
//     document.getElementById("navbar-right").style.display ="block"
//   } else{
//     document.getElementById("navbar-right").style.display ="none"
//   }
// }
