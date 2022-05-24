
import hamburgerMenu from "./menu_hamburger.js";
import { digitalClock, alarm } from "./reloj_digital.js";
import { moveBall,shortcuts } from "./teclado.js";
import scrollTop from "./btn-scroll.js";
import countdown from "./countdown.js";
import darkTheme from "./tema_oscuro.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("#activar-alarma", "#desactivar-alarma", "assets/alarm.wav");
    countdown("countdown", 'May 19, 2022 00:00:00', 'Es mi cumpleaños!');
    scrollTop(".scroll-top-btn");
    darkTheme(".dark-theme-btn" , "dark-mode");
});


d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball",".stage")
})
