const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

// Fondo
ctx.fillStyle = "#f0f0f0";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Texto
ctx.fillStyle = "#333";
ctx.font = "18px Arial";
ctx.fillText("¡Canvas!", 50, 40);

// Dibujo simple
ctx.fillStyle = "lightblue";
ctx.beginPath();
ctx.arc(150, 100, 40, 0, Math.PI * 2);
ctx.fill();

ctx.strokeStyle = "#000";
ctx.lineWidth = 2;
ctx.stroke();
