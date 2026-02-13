const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const stars = [];
const TOTAL = 600;

for (let i = 0; i < TOTAL; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.0 + 0.1,   // bem pequenas
    o: Math.random(),              // opacidade
    speed: Math.random() * 0.5 + 0.10// velocidade lenta
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let s of stars) {
    // movimento
    s.y += s.speed;

    // se sair da tela, volta pro topo
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${s.o})`;
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
