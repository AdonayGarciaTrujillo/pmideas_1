//Configurar SW
let swLocation = "serviceworker.js";
// "/beerjs/sw.js";

if (navigator.serviceWorker) {
  if (window.location.href.includes("localhost")) swLocation = "/serviceworker.js"; //Varia según el host
  navigator.serviceWorker.register(swLocation);
}

//Logic of web app
console.log("Hello world!!");
