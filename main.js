import "./style.scss";
import gsap from "gsap";

// https://spinning-animation-card.vercel.app/ - https://github.com/ln-dev7/spinning-animation-card

const start = document.querySelector(".start");
const out = document.querySelector(".out");
const mainTitle = document.querySelector(".main-title");
const circle = document.querySelector(".circle");
const cartes = document.querySelectorAll(".carte");

start.addEventListener("click", () => {
  gsap.to(start, { opacity: 0, scale: 0.85, y: 50 });
  gsap.to(mainTitle, { opacity: 0, scale: 0.85, y: 50 });
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
});

out.addEventListener("click", () => {
  gsap.to(start, { opacity: 1, scale: 1, y: 0 });
  gsap.to(mainTitle, { opacity: 1, scale: 1, y: 0 });
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
