const toast = document.getElementById("toast");
const themeToggle = document.getElementById("theme-toggle");
const scrollTopBtn = document.getElementById("scroll-top-btn");

/* ===========================
   Toast Notification
=========================== */

function showToast(message){

    if(!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2000);

}

/* ===========================
   Dark Mode
=========================== */

function loadTheme(){

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme==="dark"){

        document.body.classList.add("dark-mode");

        if(themeToggle){
            themeToggle.textContent="☀️";
        }

    }

}

function toggleTheme(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        if(themeToggle){
            themeToggle.textContent="☀️";
        }

        showToast("🌙 Dark Mode Enabled");

    }else{

        localStorage.setItem("theme","light");

        if(themeToggle){
            themeToggle.textContent="🌙";
        }

        showToast("☀️ Light Mode Enabled");

    }

}

if(themeToggle){

    themeToggle.addEventListener("click",toggleTheme);

}

loadTheme();

/* ===========================
   Scroll To Top
=========================== */

window.addEventListener("scroll",()=>{

    if(!scrollTopBtn) return;

    if(window.scrollY>300){

        scrollTopBtn.classList.add("show-scroll-btn");

    }else{

        scrollTopBtn.classList.remove("show-scroll-btn");

    }

});

if(scrollTopBtn){

    scrollTopBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}