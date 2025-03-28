
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".index").forEach(a => {
    console.log(a.href)
    a.href = import.meta.env.BASE_URL + a.getAttribute("prop").substring(1);
  });
});

// document.addEventListener("DOMContentLoaded", () => {

//   document.getElementById("about-link").href = import.meta.env.BASE_URL + "about.html";
  
// });