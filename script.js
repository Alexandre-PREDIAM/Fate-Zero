const navbar = document.querySelector(".navbar");
const bgHd = document.querySelector(".bg-header");
const lgBg = document.querySelector(".logo-fate-bg");
const imgGilgamesh = document.querySelector(".img-Gilgamesh");
const textPlace = document.querySelector(".text-place-1");
const imgLancer = document.querySelector(".img-Lancer");
const textPlace2 = document.querySelector(".text-place-2");
const imgSaber = document.querySelector(".img-Saber");
const textPlace3 = document.querySelector(".text-place-3");
const imgKirei = document.querySelector(".img-Kirei");
const textPlace4 = document.querySelector(".text-place-4");
const textPlace5 = document.querySelector(".text-place-5");
const titleMain2 = document.querySelector(".title-main-2");
const titleMain3 = document.querySelector(".title-main-3");
const titleMain4 = document.querySelector(".title-main-4");
const bg4 = document.querySelector(".bg-main-4");

window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    navbar.style.top = "0px";
    bgHd.style.filter = "grayscale(0%)";
    lgBg.style.transform = "translateX(-500px)";
  }  else {
    navbar.style.top = "-80px";
    bgHd.style.filter = "grayscale(100%)";
    lgBg.style.transform = "translateX(500px)";
  };
});

window.addEventListener("scroll", () => {
  if (scrollY > 800) {
    navbar.style.background = "#fff";
  }  else {
    navbar.style.background = "#000";
  };
});

window.addEventListener("scroll", () => {
  if (scrollY > 850) {
    imgGilgamesh.style.filter = "grayscale(0%)";
    textPlace.style.opacity = "1";
    textPlace.style.transform = "translateX(-1px)";
  }  else {
    imgGilgamesh.style.filter = "grayscale(100%)";
    textPlace.style.opacity = "0";
    textPlace.style.transform = "translateX(900px)";
  };
});

window.addEventListener("scroll", () => {
  if (scrollY > 1600) {
    imgLancer.style.filter = "grayscale(0%)";
    textPlace2.style.opacity = "1";
    textPlace2.style.transform = "translateX(1px)";
  }  else {
    imgLancer.style.filter = "grayscale(100%)";
    textPlace2.style.opacity = "0";
    textPlace2.style.transform = "translateX(-900px)";
  };
});

window.addEventListener("scroll", () => {
  if (scrollY > 2450) {
    imgSaber.style.filter = "grayscale(0%)";
    textPlace3.style.opacity = "1";
    textPlace3.style.transform = "translateX(-1px)";
  }  else {
    imgSaber.style.filter = "grayscale(100%)";
    textPlace3.style.opacity = "0";
    textPlace3.style.transform = "translateX(900px)";
  };
});

window.addEventListener("scroll", () => {
  if (scrollY > 3300) {
    imgKirei.style.filter = "grayscale(0%)";
    textPlace4.style.opacity = "1";
    textPlace4.style.transform = "translateX(0)";
  } else {
    imgKirei.style.filter = "grayscale(100%)";
    textPlace4.style.opacity = "0";
    textPlace4.style.transform = "translateX(-900px)";
  }
});

window.addEventListener("scroll", () => {
  if (scrollY > 4250) {
    titleMain2.style.transform = "translateX(0)";
    textPlace5.style.transform = "translateY(0)";
    titleMain2.style.opacity = "1";
    textPlace5.style.opacity = "1";
  } else {
    titleMain2.style.transform = "translateX(300px)";
    textPlace5.style.transform = "translateY(250px)";
    titleMain2.style.opacity = "0";
    textPlace5.style.opacity = "0";
  };
});

window.addEventListener("scroll", () => {
  if(scrollY > 4900) {
    titleMain3.style.transform = "translateX(0)";
    titleMain3.style.opacity= "1";
  } else {
    titleMain3.style.transform = "translateX(-200px)"
    titleMain3.style.opacity= "0";
  };
});

window.addEventListener("scroll", () => {

  console.log("yes");
  if(scrollY > 7300 ) {
    bg4.style.filter = "grayscale(0%)";
  } else {
    bg4.style.filter = "grayscale(100%)";
  };
});

// FIN