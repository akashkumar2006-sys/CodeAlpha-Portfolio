// ================================
// Portfolio JavaScript
// ================================

// Theme Toggle
const themeBtn = document.getElementById("themeBtn");
const icon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

// ================================
// Scroll Reveal Animation
// ================================

const sections = document.querySelectorAll("section");

function revealSections(){

    const trigger = window.innerHeight * 0.8;

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// ================================
// Active Navigation
// ================================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ================================
// Navbar Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow = "none";

    }

});

// ================================
// Typing Effect
// ================================

const subtitle = document.querySelector(".hero h3");

const text = "B.Tech AIML Student | AI & Web Developer";

let i = 0;

subtitle.textContent = "";

function typing(){

    if(i < text.length){

        subtitle.textContent += text.charAt(i);

        i++;

        setTimeout(typing,60);

    }

}

typing();

// ================================
// Back To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ================================
// Console Message
// ================================

console.log("Welcome to Akash Kumar Jha's Portfolio 🚀");
