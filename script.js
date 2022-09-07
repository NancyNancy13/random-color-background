"use strict";
// // window.addEventListener("DOMContentLoaded", start);

function randomBackground() {
  //   //   const rgb = randomColor();
  const rgbstring = rgbToCSS(randomColor());
  //   Use the return value as value for body.style.backgroundColor, thus setting the background color to a randomvalue
  const HTML = document.querySelector("html");
  HTML.style.backgroundColor = rgbstring;
}
// // declare a function to get the range from 0 to 255
// function randomiser(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }
// const randomNumber = randomiser(0, 255);
// console.log(`${randomNumber}`);
function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return { r, b, g };
}
function rgbToCSS(rgb) {
  let rgbstring = `rgb(${rgb.r} ${rgb.g} ${rgb.b})`;
  console.log(rgbstring);
  return rgbstring;
}
randomBackground();
