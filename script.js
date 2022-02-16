
//slides
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

function redirect(url){
  location.replace(url);
}


function selectCard(card, ob){
  card.classList.toggle("pick-activate");
  console.log(card.firstElementChild);
  buttonclicker(ob);
}

//Card color change function

var header = document.getElementById("oraclebutton");
var btns = header.getElementsByClassName("pick");
var icons = header.getElementsByClassName("story-icons");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    
  var current = document.getElementsByClassName("activate");
  console.log(current);
  current[0].className = current[0].className.replace(" activate", "");
  this.className += " activate";
  console.log(current[0].className);
  for(var i=0;i<btns.length;i++){
  
  if(btns[i].className.includes("activate")){
    btns[i].firstElementChild.firstElementChild.setAttribute("fill","white");
  }
  else{
    btns[i].firstElementChild.firstElementChild.setAttribute("fill","black");
  }
}
  });

  
}


function iconColorChange(e, bool){
 if(bool){
   e.firstElementChild.firstElementChild.setAttribute("fill","white");
   bool=false;
 }
 else{
  e.firstElementChild.firstElementChild.setAttribute("fill","black");
 }

}
function buttonclicker(butt){
  document.getElementById(butt).click();
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// document.getElementById("defaultOpen").click();


//Accordion Function
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function accord() {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    // var beat = this.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild.scrollHeight;
    // console.log(beat);
    console.log("panel is ", panel);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight*10 + "px";
    } 
  });
}


var accs = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < accs.length; i++) {
  accs[i].addEventListener("click", function accord() {
    this.classList.toggle("active1");
    var panel1 = this.nextElementSibling;
    if (panel1.style.maxHeight) {
      panel1.style.maxHeight = null;
    } else {
      console.log(panel1.scrollHeight);
      panel1.style.maxHeight = panel1.scrollHeight + "px";
    } 
  });
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function dropdown() {
    this.classList.toggle("active2");
    var content = this.nextElementSibling;
    console.log(content);
    if (content.style.maxHeight) {
      console.log("entering here");
      content.style.maxHeight = null;
    } else {
      console.log(content.scrollHeight);
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
//pic 1
//var modal = document.getElementById("myModal");

//var img = document.getElementById("myImg");
//var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");
//img.onclick = function pop(){
//  modal.style.display = "block";
//  modalImg.src = this.src;
//  captionText.innerHTML = this.alt;
//}
//var span = document.getElementsByClassName("close")[0];
//span.onclick = function() {
//  modal.style.display = "none";
//}

// pic 2
//
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// Get the button that opens the modal
var btn = document.querySelectorAll("a.modal-button");
console.log("modal here"+btn.length);
// All page modals
var modals = document.querySelectorAll('.modal');
console.log("modal here"+modals);
// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");
console.log("modal here"+spans);
// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    console.log("modal here"+modal);
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
// function IBMMergeOpen(){
// var modal = document.getElementById("myModal1");
// var btn = document.getElementById("myBtn1");
// var span = document.getElementsByClassName("close1")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// }

// Oracle Content Cards
function openinfo(evt, cardname) {
  var i, card_content, cardlinks;
  card_content = document.getElementsByClassName("card_content");
  for (i = 0; i < card_content.length; i++) {
    card_content[i].style.display = "none";
  }
  cardlinks = document.getElementsByClassName("cardlinks");
  for (i = 0; i < cardlinks.length; i++) {
    cardlinks[i].className = cardlinks[i].className.replace(" active", "");
  }
  document.getElementById(cardname).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen1").click();


//Customer card content
function opencinfo(evt, cardcname) {
  var i, card_ccontent, cardclinks;
  card_ccontent = document.getElementsByClassName("card_ccontent");
  for (i = 0; i < card_ccontent.length; i++) {
    card_ccontent[i].style.display = "none";
  }
  cardclinks = document.getElementsByClassName("cardclinks");
  for (i = 0; i < cardclinks.length; i++) {
    cardclinks[i].className = cardclinks[i].className.replace(" active", "");
  }
  document.getElementById(cardcname).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen1" and click on it
document.getElementById("defaultOpen2").click();


//Button Hide Functions
//function pickchange(butid){
//  var xs = document.getElementById(butid);
//  if (xs.style.display === "none") {
//    xs.style.display = "block";
//    xs.style.transition = "0.5s";
//  } else {
//    xs.style.display = "none";
//    xs.style.transition = "0.5s";
//  }
//}

//function normalpick(butid){
//  var xs = document.getElementById(butid);
//  if (xs.style.display === "none") {
//    xs.style.display = "block";
//    xs.style.transition = "0.5s";
//  } else {
//    xs.style.display = "none";
//    xs.style.transition = "0.5s";
//  }
//}


//sticky nav bar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Opacity change of content
function cbox(cid,cclass){
var chbox = document.getElementById(cid);
var all = document.getElementsByClassName(cclass);
if(chbox.checked == true){
  for (var i = 0; i < all.length; i++) {
    all[i].style.opacity = '1';
  }
}
else{
  for (var i = 0; i < all.length; i++) {
    all[i].style.opacity = '0.5';
  }
}
}

//Key benefits tab switches
function openben(evt, cityName) {
  var i, keycontent, keylinks;
  keycontent = document.getElementsByClassName("keycontent");
  for (i = 0; i < keycontent.length; i++) {
    keycontent[i].style.display = "none";
  }
  keylinks = document.getElementsByClassName("keylinks");
  for (i = 0; i < keylinks.length; i++) {
    keylinks[i].className = keylinks[i].className.replace(" keyactive", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " keyactive";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("keyOpen").click();
