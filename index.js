  const form = document.querySelector("form");
  const message = document.getElementById("message");
  const mainPaige = document.getElementById("mainPage");
  const thankYouPage = document.getElementById("thankYou");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const rating = form.elements.rating.value;
  message.innerHTML = ("You selected " + rating + " out of 5"); 
  mainPaige.style.display = "none";
  thankYouPage.style.display = "block";

});




  


  
