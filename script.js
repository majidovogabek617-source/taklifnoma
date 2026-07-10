function yes() {
  alert("Rahmat! ❤️ Juda xursand bo'ldim.");
  window.location.href = "https://t.me/majidovw";
}

const no = document.getElementById("no");

no.addEventListener("mouseover", () => {
  no.style.position = "absolute";
  no.style.left = Math.random() * (window.innerWidth - 100) + "px";
  no.style.top = Math.random() * (window.innerHeight - 50) + "px";
});
