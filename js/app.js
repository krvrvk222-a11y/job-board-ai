const toast = document.getElementById("toast");
const themeToggle = document.getElementById("theme-toggle");
const scrollTopBtn = document.getElementById("scroll-top-btn");

let toastTimeout;

/* ===========================
   Toast Notification
=========================== */

function showToast(message){

    if(!toast) return;

    clearTimeout(toastTimeout);

    toast.textContent = message;

    toast.classList.add("show");

    toastTimeout = setTimeout(()=>{

        toast.classList.remove("show");

    },2000);

}

/* ===========================
   Dark Mode
=========================== */

function loadTheme(){

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark-mode");

        if(themeToggle){
            themeToggle.textContent = "☀️";
        }

    }

}

function toggleTheme(){

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    if(themeToggle){
        themeToggle.textContent = isDark ? "☀️" : "🌙";
    }

    showToast(
        isDark
            ? "🌙 Dark Mode Enabled"
            : "☀️ Light Mode Enabled"
    );

}

if(themeToggle){

    themeToggle.addEventListener("click", toggleTheme);

}

loadTheme();

/* ===========================
   Scroll To Top
=========================== */

window.addEventListener("scroll",()=>{

    if(!scrollTopBtn) return;

    if(window.scrollY > 300){

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

/* ===========================
   Company Card Navigation
=========================== */

const companyCards = document.querySelectorAll(".company-card");

companyCards.forEach(card => {

    function openCompanyJobs(){

        const company = card.dataset.company;

        window.location.href =
            `jobs.html?company=${encodeURIComponent(company)}`;

    }

    card.addEventListener("click", openCompanyJobs);

    card.addEventListener("keydown", event => {

        if(event.key === "Enter" || event.key === " "){

            event.preventDefault();

            openCompanyJobs();

        }

    });

});