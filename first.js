const btn = document.getElementById('change-btn');
const code = document.getElementById('color-code');

const colors = [
  {name: "Red", hex: "#e74c3c"},
  {name: "Blue", hex: "#3498db"},
  {name: "Green", hex: "#2ecc71"},
  {name: "Yellow", hex: "#f1c40f"},
  {name: "Purple", hex: "#9b59b6"},
  {name: "Cyan", hex: "#1abc9c"},
  {name: "Orange", hex: "#e67e22"},
  {name: "Dark Blue", hex: "#34495e"},
  {name: "Pink", hex: "#ff6b6b"},
  {name: "Mint", hex: "#00b894"}
];

btn.addEventListener('click', () => {
  
  const selected = colors[Math.floor(Math.random() * colors.length)];

  
  document.body.style.backgroundColor = selected.hex;

  
  code.textContent = `${selected.name} (${selected.hex})`;

  
  const rgb = parseInt(selected.hex.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;
  const brightness = (r*299 + g*587 + b*114) / 1000;
  btn.style.color = brightness > 125 ? '#000' : '#fff';
});


