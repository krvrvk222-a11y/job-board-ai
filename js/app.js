const toast = document.getElementById("toast");
const themeToggle = document.getElementById("theme-toggle");

/* ===========================
   Toast Notification
=========================== */

function showToast(message){

    if(!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

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

        themeToggle.textContent = "☀️";

    }

}

function toggleTheme(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeToggle.textContent = "☀️";

        showToast("🌙 Dark Mode Enabled");

    }else{

        localStorage.setItem("theme","light");

        themeToggle.textContent = "🌙";

        showToast("☀️ Light Mode Enabled");

    }

}

if(themeToggle){

    themeToggle.addEventListener("click",toggleTheme);

}

loadTheme();