const toast = document.getElementById("toast");

function showToast(message){

    if(!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    },2000);

}