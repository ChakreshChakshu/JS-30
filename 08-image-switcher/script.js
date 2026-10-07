// Offline SVG visual gallery items
const slides = [
  {
    title: "Sunset Peaks",
    svg: `<svg viewBox="0 0 500 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f97316"/>
          <stop offset="100%" stop-color="#431407"/>
        </linearGradient>
      </defs>
      <rect width="500" height="260" fill="url(#g1)"/>
      <circle cx="250" cy="110" r="45" fill="#fde047" opacity="0.9"/>
      <polygon points="50,260 170,130 290,260" fill="#1c1917" opacity="0.95"/>
      <polygon points="210,260 340,90 470,260" fill="#292524" opacity="0.8"/>
    </svg>`
  },
  {
    title: "Emerald Forest",
    svg: `<svg viewBox="0 0 500 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#059669"/>
          <stop offset="100%" stop-color="#064e3b"/>
        </linearGradient>
      </defs>
      <rect width="500" height="260" fill="url(#g2)"/>
      <polygon points="120,260 180,80 240,260" fill="#047857"/>
      <polygon points="200,260 270,60 340,260" fill="#065f46"/>
      <polygon points="300,260 370,100 440,260" fill="#047857"/>
    </svg>`
  },
  {
    title: "Ocean Depths",
    svg: `<svg viewBox="0 0 500 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="100%" stop-color="#082f49"/>
        </linearGradient>
      </defs>
      <rect width="500" height="260" fill="url(#g3)"/>
      <path d="M0,180 Q125,120 250,180 T500,180 L500,260 L0,260 Z" fill="#0369a1" opacity="0.7"/>
      <path d="M0,210 Q125,170 250,210 T500,210 L500,260 L0,260 Z" fill="#075985" opacity="0.9"/>
    </svg>`
  },
  {
    title: "Aurora Night",
    svg: `<svg viewBox="0 0 500 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e1b4b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="500" height="260" fill="url(#g4)"/>
      <path d="M0,120 Q150,40 300,100 T500,60 L500,160 L0,160 Z" fill="#22c55e" opacity="0.35"/>
      <path d="M0,100 Q150,180 300,80 T500,110 L500,180 L0,180 Z" fill="#a855f7" opacity="0.3"/>
    </svg>`
  },
  {
    title: "Golden Dunes",
    svg: `<svg viewBox="0 0 500 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#78350f"/>
        </linearGradient>
      </defs>
      <rect width="500" height="260" fill="url(#g5)"/>
      <path d="M0,160 Q180,100 350,200 T500,170 L500,260 L0,260 Z" fill="#b45309" opacity="0.8"/>
      <path d="M0,200 Q200,240 500,190 L500,260 L0,260 Z" fill="#92400e" opacity="0.9"/>
    </svg>`
  }
];

let currentIndex = 0;

const imageFrame = document.getElementById("imageFrame");
const caption = document.getElementById("caption");
const counter = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dotsContainer");

function initDots() {
  dotsContainer.innerHTML = "";
  slides.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (idx === currentIndex ? " active" : "");
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });
}

function renderSlide() {
  const current = slides[currentIndex];
  imageFrame.innerHTML = current.svg;
  caption.textContent = current.title;
  counter.textContent = `${currentIndex + 1} / ${slides.length}`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === slides.length - 1;

  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, idx) => {
    dot.className = "dot" + (idx === currentIndex ? " active" : "");
  });
}

function goToSlide(index) {
  currentIndex = index;
  renderSlide();
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderSlide();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    renderSlide();
  }
});

initDots();
renderSlide();
