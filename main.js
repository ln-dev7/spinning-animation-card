import "./style.scss";
import gsap from "gsap";

// https://spinning-animation-card.vercel.app/ - https://github.com/ln-dev7/spinning-animation-card

const start = document.querySelector(".start");
const out = document.querySelector(".out");
const mainTitle = document.querySelector(".main-title");
const circle = document.querySelector(".circle");
const cartes = document.querySelectorAll(".carte");
const h1 = document.querySelectorAll(".card-titles h1");
const cartesContainer = document.querySelector(".cartes");

let intervalId;
function PlayCartesAnimation(index) {
  cartesContainer.style.transform = `translate(-50%, 0) rotate(${
    index * -45
  }deg)`;
}

function PlayH1Animation(index) {
  h1.forEach((h, i) => {
    h.style.transform = `translateY(${index * -100}%)`;
  })
}

start.addEventListener("click", () => {
  gsap.to(start, { opacity: 0, scale: 0.85, y: 50 });
  gsap.to(mainTitle, { opacity: 0, scale: 0.85, y: 50 });
  gsap.to(".card-titles", { opacity: 1 });
  gsap.to(circle, { y: -150 });
  gsap.to(out, { opacity: 1 });
  Array.from(cartes)
    .reverse()
    .forEach((carte, index) => {
      const rotate = `${finalValues[index].rotate}deg`;
      const x = `${finalValues[index].x}`;
      const y = `${finalValues[index].y}`;
      carte.style.transform = `rotate(${rotate}) translate(${x}, ${y})`;
    });
  clearInterval(intervalId);
  let index = 0;
  intervalId = setInterval(() => {
    PlayCartesAnimation(index);
    PlayH1Animation(index);
    index++;
    if (index === 8) {
      index = 0;
    }
  }, 1000);
});

out.addEventListener("click", () => {
  gsap.to(start, { opacity: 1, scale: 1, y: 0 });
  gsap.to(mainTitle, { opacity: 0, scale: 1, y: 0 });
  gsap.to(".card-titles", { opacity: 0 });
  gsap.to(circle, { y: 0 });
  gsap.to(out, { opacity: 0 });
  Array.from(cartes)
    .reverse()
    .forEach((carte, index) => {
      const rotate = `${initiaValues[index].rotate}deg`;
      const x = `${initiaValues[index].x}`;
      const y = `${initiaValues[index].y}`;
      carte.style.transform = `rotate(${rotate}) translate(${x}, ${y})`;
    });
  clearInterval(intervalId);
  cartesContainer.style.transform = `translate(-50%, 0) rotate(0deg)`;
  h1.forEach((h, i) => {
    h.style.transform = `translateY(0)`;
  })
});

const initiaValues = [
  {
    y: "0px",
    x: "-50%",
    rotate: 0,
  },
  {
    y: "0px",
    x: "-50%",
    rotate: 7,
  },
  {
    y: "0px",
    x: "-50%",
    rotate: 14,
  },
  {
    y: "0px",
    x: "-50%",
    rotate: 21,
  },
  {
    y: "0px",
    x: "-50%",
    rotate: -5,
  },
  {
    y: "0px",
    x: "-50%",
    rotate: -10,
  },
  {
    y: "0px",
    x: "-50%",
    rotate: -15,
  },
  {
    y: "0px",
    x: "-50%",
    rotate: -20,
  },
];

const finalValues = [
  {
    y: "275px",
    x: "-50%",
    rotate: 0,
  },
  {
    y: "100px",
    x: "300px",
    rotate: 45,
  },
  {
    y: "-300px",
    x: "490px",
    rotate: 90,
  },
  {
    y: "-750px",
    x: "320px",
    rotate: 135,
  },
  {
    y: "1280px",
    x: "-50%",
    rotate: 0,
  },
  {
    y: "-750px",
    x: "-550px",
    rotate: -135,
  },
  {
    y: "-300px",
    x: "-720px",
    rotate: -90,
  },
  {
    y: "100px",
    x: "-540px",
    rotate: -45,
  },
];
