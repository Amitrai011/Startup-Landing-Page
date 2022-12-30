// alert("You have been hacked");

var questions = document.querySelectorAll(".freqQuestion");

questions.forEach((header, i) => {
  header.addEventListener("click", function() {
    header.nextElementSibling.classList.toggle("active");
  });
});

var simpleBookmark = document.querySelector(".simple-bookmark");
simpleBookmark.addEventListener("click", function() {
  document.querySelector(".bookmark-heading").innerHTML = "Bookmark in one click";
  document.querySelector(".bookmark-image").src = "images/illustration-features-tab-1.svg";
  document.querySelector(".bookmark-description").innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
});

var simpleBookmark = document.querySelector(".speedy-searching");
simpleBookmark.addEventListener("click", function() {
  document.querySelector(".bookmark-heading").innerHTML = "Intelligent search";
  document.querySelector(".bookmark-image").src = "images/illustration-features-tab-2.svg";
  document.querySelector(".bookmark-description").innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
});

var simpleBookmark = document.querySelector(".easy-sharing");
simpleBookmark.addEventListener("click", function() {
  document.querySelector(".bookmark-heading").innerHTML = "Share your bookmarks";
  document.querySelector(".bookmark-image").src = "images/illustration-features-tab-3.svg";
  document.querySelector(".bookmark-description").innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
});

// hamburger button
var count = 0;
var hamburgerButton = document.querySelector(".hamburger-button");
hamburgerButton.addEventListener("click", function() {
  var rightNav = document.querySelector(".right-navbar-element");
  rightNav.classList.toggle("nav-hide");

  if(count == 0) {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".navbar").classList.toggle("navbar-hide");
    document.querySelector(".hamburger-button").src = "images/close.png";
    count = 1;
  } else {
    document.querySelector(".hamburger-button").src = "images/icon-hamburger.svg";
    document.querySelector(".logo").style.display = "flex";
    count = 0;
  }
});
