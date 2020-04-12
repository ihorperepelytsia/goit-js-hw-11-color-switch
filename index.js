"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener("click", changeBackgroundColor);
stopBtn.addEventListener("click", stopChangeBackgroundColor);

let isActive = false;
let timerId;

function changeBackgroundColor() {
  if (isActive) {
    return;
  }

  isActive = true;

  timerId = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
    console.log(`1`);
  }, 1000);
}

function stopChangeBackgroundColor() {
  clearInterval(timerId);
  isActive = false;
}
