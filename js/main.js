import {ThemeSwitcher} from "./theme.js";
const t = new ThemeSwitcher();

document.querySelector(".themeDark").addEventListener('click', ()=>{
    t.setValue("darkMode");
})

document.querySelector(".themeLight").addEventListener('click', ()=>{
    t.setValue("lightMode");
})

document.querySelector(".themeRed").addEventListener('click', ()=>{
    t.setValue("redMode");
})

document.querySelector(".themeBlue").addEventListener('click', ()=>{
    t.setValue("blueMode");
})

document.querySelector(".themePurple").addEventListener('click', ()=>{
    t.setValue("purpleMode");
})

