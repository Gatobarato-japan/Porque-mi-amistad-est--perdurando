/* ========================= */
/* DOM LOADED */
/* ========================= */

document.addEventListener("DOMContentLoaded", () => {

  navbarScrollEffect();

  revealSections();

  smoothAnchors();

  randomMoodRotations();

  fakeMusicPlayer();

});


/* ========================= */
/* NAVBAR SCROLL EFFECT */
/* ========================= */

function navbarScrollEffect(){

  const navbar =
  document.querySelector(".navbar");

  if(!navbar) return;

  window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

      navbar.style.padding =
      "18px 70px";

      navbar.style.background =
      "rgba(244,240,234,0.95)";

      navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.05)";

    }

    else{

      navbar.style.padding =
      "24px 70px";

      navbar.style.background =
      "rgba(244,240,234,0.82)";

      navbar.style.boxShadow =
      "none";

    }

  });

}


/* ========================= */
/* SECTION REVEAL */
/* ========================= */

function revealSections(){

  const reveals =
  document.querySelectorAll("section");

  const observer =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        entry.target.classList.add("active");

      }

    });

  },{
    threshold:0.15
  });

  reveals.forEach((section) => {

    section.classList.add("reveal");

    observer.observe(section);

  });

}


/* ========================= */
/* SMOOTH ANCHOR LINKS */
/* ========================= */

function smoothAnchors(){

  const links =
  document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {

    link.addEventListener("click", (e) => {

      e.preventDefault();

      const targetId =
      link.getAttribute("href");

      const target =
      document.querySelector(targetId);

      if(target){

        target.scrollIntoView({
          behavior:"smooth"
        });

      }

    });

  });

}


/* ========================= */
/* RANDOM ROTATIONS */
/* ========================= */

function randomMoodRotations(){

  const images =
  document.querySelectorAll(".mood-img");

  images.forEach((img) => {

    const randomRotate =
    (Math.random() * 6 - 3).toFixed(1);

    img.style.transform =
    `rotate(${randomRotate}deg)`;

  });

}


/* ========================= */
/* FAKE MUSIC PLAYER */
/* ========================= */

function fakeMusicPlayer(){

  const buttons =
  document.querySelectorAll(".player-controls button");

  buttons.forEach((button) => {

    button.addEventListener("click", () => {

      button.style.transform =
      "scale(0.92)";

      setTimeout(() => {

        button.style.transform =
        "scale(1)";

      },150);

    });

  });

}


/* ========================= */
/* SECRET PAGE TITLE EFFECT */
/* ========================= */

const secretTitle =
document.querySelector(".secret-hero-text h1");

if(secretTitle){

  secretTitle.addEventListener("mouseenter", () => {

    secretTitle.style.letterSpacing =
    "10px";

  });

  secretTitle.addEventListener("mouseleave", () => {

    secretTitle.style.letterSpacing =
    "2px";

  });

}

/* ========================= */
/* SOFT HOVER EFFECT */
/* ========================= */

function enableHoverTilt(images){

  images.forEach((img) => {

    img.addEventListener("mouseenter", () => {

      img.style.transition =
      "transform 0.4s ease";

      img.style.transform =
      "scale(1.03) rotate(1deg)";

    });

    img.addEventListener("mouseleave", () => {

      img.style.transform =
      "scale(1) rotate(0deg)";

    });

  });

}

/* ========================= */
/* SECRET BUTTON PULSE */
/* ========================= */

const secretButton =
document.querySelector(".secret-button");

if(secretButton){

  setInterval(() => {

    secretButton.classList.add("float");

    setTimeout(() => {

      secretButton.classList.remove("float");

    },2000);

  },5000);

}


/* ========================= */
/* KEYBOARD SECRET */
/* ========================= */

let typedKeys = "";

document.addEventListener("keydown", (e) => {

  typedKeys += e.key.toLowerCase();

  if(typedKeys.includes("milenka")){

    document.body.classList.add("secret-mode");

    setTimeout(() => {

      document.body.classList.remove("secret-mode");

    },3000);

    typedKeys = "";

  }

});


/* ========================= */
/* SECRET MODE EFFECT */
/* ========================= */

const style =
document.createElement("style");

style.innerHTML = `

.secret-mode{

  filter:
  brightness(1.03)
  saturate(1.08);

  transition:1s ease;

}

`;

document.head.appendChild(style);


/* ========================= */
/* CONSOLE MESSAGE */
/* ========================= */

console.log(
`
✦ welcome to milenka's world ✦

かわいいけど変。

`
);