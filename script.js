// Official AQ Wellness WhatsApp number (country code + number, digits only).
const WHATSAPP_NUMBER = "919622419388";
const message = encodeURIComponent("Assalamu Alaikum, I would like to enquire about AQ Wellness & Aesthetics Centre services.");
const whatsapp = document.getElementById("whatsapp-link");
document.querySelectorAll(".mobile-cta-wa").forEach(a => a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`);
if (whatsapp) {
  whatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  whatsapp.addEventListener("click", (event) => {
    if (WHATSAPP_NUMBER.includes("X")) {
      event.preventDefault();
      alert("Please add your clinic WhatsApp number in script.js before using this button.");
    }
  });
}
const address = "AQ Wellness & Aesthetics Centre, 1st Floor, Lar Bypass, Near Tehsil Office, Lar, Ganderbal, Jammu and Kashmir 191131";
const map = document.getElementById("map-link");
if (map) map.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
document.getElementById("year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}
