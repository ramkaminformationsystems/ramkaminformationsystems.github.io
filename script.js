const messages = [
  "Signal clear. Standing by, Commander.",
  "Beacon stable. Course remains forward.",
  "Mission Control acknowledges your signal.",
  "Keep building. Keep learning. Keep moving.",
  "No countdown required. The mission continues."
];

const terminalText = document.getElementById("terminalText");
const transmitBtn = document.getElementById("transmitBtn");
const toast = document.getElementById("toast");

let messageIndex = 0;
let typingTimer;

function typeMessage(message) {
  clearInterval(typingTimer);
  terminalText.textContent = "";
  let i = 0;
  typingTimer = setInterval(() => {
    terminalText.textContent += message[i++];
    if (i >= message.length) clearInterval(typingTimer);
  }, 24);
}

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

transmitBtn.addEventListener("click", () => {
  messageIndex = (messageIndex + 1) % messages.length;
  typeMessage(messages[messageIndex]);
  showToast("Transmission received by Mission Control.");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

typeMessage(messages[0]);
