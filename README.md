# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/solutions/interactive-rating-component-91p4GnvP9P). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/Screenshot%202022-12-09%20at%2014-11-47%20Document.png)

### Links

- Live Site URL: [live site URL](https://interactive-rating-component-alberto.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript

### What I learned

 This is a small project to practice handling user interactions and updating the DOM with JavaScript. I just now implemented the Javascript for it and here's the code which I'm really proud of:

 ```js
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
 ```

### Continued development

I'm looking forward to learn more about css positioning techniques like grid and also to learn more about Javascript. 

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=i37KVt_IcXw) - This helped me to understand better how to manipulate the DOM using Vanilla Javascript.

## Author

- Frontend Mentor - [@Alberto-12](https://www.frontendmentor.io/profile/Alberto-12)


## Acknowledgments

I'm very thankful for my mentor [Tresure Kabareebe](https://github.com/trekab) that guided me through the process.

