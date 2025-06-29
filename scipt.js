function applyColorToBox() {
  const colorInput = document.getElementById('color-input');
  const box = document.getElementById('box');
  const color = colorInput.value;

  box.style.backgroundColor = color;
}

document.getElementById('apply-btn').addEventListener('click', applyColorToBox);
