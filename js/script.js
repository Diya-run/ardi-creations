/* ==========================================
   ArDi Creations
   SCRIPT.JS - PART 1
========================================== */

// ================= LOADER =================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        if(loader){

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.pointerEvents = "none";

        }

    },1000);

});

// ================= CUSTOM CURSOR =================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    if(cursor){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

});

// ================= CURSOR TRAIL =================

document.addEventListener("mousemove",(e)=>{

    const trail = document.createElement("div");

    trail.classList.add("trail");

    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";

    document.body.appendChild(trail);

    setTimeout(()=>{

        trail.remove();

    },400);

});

// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}

// ================= CLOSE MENU =================

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});
/* ==========================================
   SCRIPT.JS - PART 2
========================================== */

// ================= GLASS NAVBAR =================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("glass");

    } else {

        navbar.classList.remove("glass");

    }

});

// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// ================= FLOATING PARTICLES =================

function createParticles(){

    const container = document.querySelector(".particles");

    if(!container) return;

    for(let i=0;i<50;i++){

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random()*100 + "%";
        particle.style.top = Math.random()*100 + "%";

        particle.style.animationDuration =
        (Math.random()*5+3)+"s";

        particle.style.animationDelay =
        Math.random()*5+"s";

        container.appendChild(particle);

    }

}

createParticles();

// ================= GSAP INTRO =================

if(typeof gsap !== "undefined"){

    gsap.from(".logo",{

        y:-40,
        opacity:0,
        duration:1

    });

    gsap.from(".nav-links li",{

        y:-30,
        opacity:0,
        stagger:.15,
        delay:.3

    });

    gsap.from(".hero-content h1",{

        y:60,
        opacity:0,
        duration:1.2

    });

    gsap.from(".hero-content h3",{

        y:40,
        opacity:0,
        duration:1,
        delay:.4

    });

    gsap.from(".hero-buttons",{

        y:40,
        opacity:0,
        duration:1,
        delay:.7

    });

}
/* ==========================================
   SCRIPT.JS - PART 3
========================================== */

// ================= SECTION REVEAL =================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section,.service-card,.stat-box").forEach(item=>{

    observer.observe(item);

});

// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

    const originalText = counter.innerText;

    const target = parseInt(originalText.replace(/\D/g,""));

    let count = 0;

    const speed = Math.max(10, Math.floor(2000 / target));

    const updateCounter = ()=>{

        count += Math.ceil(target / 60);

        if(count >= target){

            counter.innerText = originalText;

        }else{

            counter.innerText = count;

            setTimeout(updateCounter,speed);

        }

    };

    updateCounter();

});

// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ================= HERO PARALLAX =================

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY =
        window.scrollY * 0.4 + "px";

    }

});

// ================= BUTTON RIPPLE EFFECT =================

document.querySelectorAll(".primary-btn,.secondary-btn,.book-btn").forEach(btn=>{

    btn.addEventListener("click",function(e){

        const ripple = document.createElement("span");

        ripple.style.position="absolute";
        ripple.style.width="12px";
        ripple.style.height="12px";
        ripple.style.borderRadius="50%";
        ripple.style.background="rgba(255,255,255,.6)";
        ripple.style.left=e.offsetX+"px";
        ripple.style.top=e.offsetY+"px";
        ripple.style.transform="translate(-50%,-50%)";
        ripple.style.animation="trailFade .6s forwards";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

console.log("✅ ArDi Creations Website Loaded Successfully");
