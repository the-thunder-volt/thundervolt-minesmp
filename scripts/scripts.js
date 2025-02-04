function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

const gallery = document.getElementById("gallery");

let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener("mousedown", (e) => {
    isDown = true;
    gallery.classList.add("active");
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener("mouseleave", () => {
    isDown = false;
    gallery.classList.remove("active");
});

gallery.addEventListener("mouseup", () => {
    isDown = false;
    gallery.classList.remove("active");
});

gallery.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    gallery.scrollLeft = scrollLeft - walk;
});
function opeN() {
    document.getElementById("dispbe").classList.toggle("active")
    
}