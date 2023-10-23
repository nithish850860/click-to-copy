const btn = document.getElementById("btn");
const lab = document.getElementById("lab");

btn.addEventListener("click",()=>{
    btn.classList.add("active");
    navigator.clipboard.writeText(lab.innerHTML);
    setTimeout(()=>{
        btn.classList.remove("active");
    },3000)
})