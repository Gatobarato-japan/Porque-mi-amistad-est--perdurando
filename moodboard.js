/* ========================= */
/* MOODBOARD SYSTEM */
/* ========================= */

document.addEventListener("DOMContentLoaded", () => {

  initializeMoodboard();

});


/* ========================= */
/* INITIALIZE */
/* ========================= */

function initializeMoodboard(){

  const moodImages =
  document.querySelectorAll(".mood-img");

  if(!moodImages.length) return;

  applyRandomDepth(moodImages);

  enableHoverTilt(moodImages);

  enableExpandMode(moodImages);

  enableFloatingEffect(moodImages);

}


/* ========================= */
/* RANDOM DEPTH */
/* ========================= */

function applyRandomDepth(images){

  images.forEach((img,index) => {

    const randomRotate =
    (Math.random() * 8 - 4).toFixed(1);

    const randomOffset =
    Math.floor(Math.random() * 10);

    img.style.transform =
    `
    rotate(${randomRotate}deg)
    translateY(${randomOffset}px)
    `;

    img.style.zIndex =
    index + 1;

  });

}


/* ========================= */
/* HOVER TILT */
/* ========================= */

function enableHoverTilt(images){

  images.forEach((img) => {

    img.addEventListener("mousemove", (e) => {

      const rect =
      img.getBoundingClientRect();

      const x =
      e.clientX - rect.left;

      const y =
      e.clientY - rect.top;

      const rotateY =
      ((x / rect.width) - 0.5) * 10;

      const rotateX =
      ((y / rect.height) - 0.5) * -10;

      img.style.transition =
      "transform 0.15s ease";

      img.style.transform =
      `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
      `;

    });

    img.addEventListener("mouseleave", () => {

      const randomRotate =
      (Math.random() * 8 - 4).toFixed(1);

      img.style.transition =
      "transform 0.5s ease";

      img.style.transform =
      `
      rotate(${randomRotate}deg)
      scale(1)
      `;

    });

  });

}


/* ========================= */
/* EXPAND MODE */
/* ========================= */

function enableExpandMode(images){

  images.forEach((img) => {

    img.addEventListener("click", () => {

      const existingOverlay =
      document.querySelector(".mood-overlay");

      if(existingOverlay){

        existingOverlay.remove();

        return;

      }

      createOverlay(img);

    });

  });

}


/* ========================= */
/* CREATE OVERLAY */
/* ========================= */

function createOverlay(image){

  const overlay =
  document.createElement("div");

  overlay.classList.add("mood-overlay");

  overlay.innerHTML = `
  
    <div class="overlay-content">

      <img src="${image.src}" alt="Expanded mood image">

    </div>

  `;

  document.body.appendChild(overlay);

  requestAnimationFrame(() => {

    overlay.classList.add("active");

  });

  closeOverlay(overlay);

}


/* ========================= */
/* CLOSE OVERLAY */
/* ========================= */

function closeOverlay(overlay){

  overlay.addEventListener("click", () => {

    overlay.classList.remove("active");

    setTimeout(() => {

      overlay.remove();

    },300);

  });

}


/* ========================= */
/* FLOATING EFFECT */
/* ========================= */

function enableFloatingEffect(images){

  images.forEach((img,index) => {

    const speed =
    1 + (index * 0.3);

    animateFloating(img,speed);

  });

}


/* ========================= */
/* FLOAT ANIMATION */
/* ========================= */

function animateFloating(element,speed){

  let position = 0;

  setInterval(() => {

    position += 0.01;

    const move =
    Math.sin(position) * speed;

    element.style.marginTop =
    `${move}px`;

  },16);

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
/* OVERLAY STYLES */
/* ========================= */

const overlayStyles =
document.createElement("style");

overlayStyles.innerHTML = `

.mood-overlay{

  position:fixed;

  inset:0;

  background:
  rgba(10,10,10,0.75);

  display:flex;
  align-items:center;
  justify-content:center;

  z-index:9999;

  opacity:0;

  backdrop-filter:blur(8px);

  transition:
  opacity 0.3s ease;

}

.mood-overlay.active{

  opacity:1;

}

.overlay-content{

  width:80%;
  max-width:700px;

}

.overlay-content img{

  width:100%;

  border-radius:24px;

  box-shadow:
  0 20px 60px rgba(0,0,0,0.3);

}

`;

document.head.appendChild(overlayStyles);


/* ========================= */
/* CONSOLE MESSAGE */
/* ========================= */

console.log(
`
✦ moodboard system loaded ✦

dreamy mode activated.

`
);