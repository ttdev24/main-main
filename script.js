
const aboutBtn = document.getElementById("aboutBtn");
const aboutHero = document.getElementById("aboutHero");
const moreInfo = document.getElementById("moreInfo");

function scrollAbout() {
    aboutHero.scrollIntoView({behavior: "smooth"});
}

aboutBtn.addEventListener("click", scrollAbout);
moreInfo.addEventListener("click", scrollAbout);

console.log("hello");

// написать мультискролл (одна функция на все скроллы)

// const yOffset = -70; 
// const element = document.getElementById(id);
// const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;