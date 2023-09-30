function resetGrid() {
  const modal = document.querySelector('#reset-modal');
  const sideCount = parseInt(modal.querySelector('#modal-side-count').value);
  
  
  if (!Number.isFinite(sideCount) || sideCount < 1 || sideCount > 100) {
    return false;
  }

  modal.close();s
  generateGrid(sideCount, sideCount);
  return true;
}

function generateGrid(rows = 16, cols = 16) {
  const container = document.querySelector("#grid");

  container.replaceChildren();
  
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      
      cell.addEventListener('mouseenter', (e) => {
        const cell = e.target;
        cell.style.backgroundColor = generateHsl(cell.style.backgroundColor);
      });
      
      row.appendChild(cell);
    }
  }
}

function generateHsl(oldColor) {
  console.log('test:' + oldColor);
  if (oldColor.slice(0, 3) !== 'rgb') {
    return `hsl(${Math.floor(Math.random() * 360)},` +
               `${Math.floor(Math.random() * 101)}%,` +
               `50%)`;
  } else {
    const hsl = rgbToHsl(...oldColor.replace(/[^\d,]/g, '').split(','));
    console.log(Math.round(hsl[2] * 100 - 5));
    return `hsl(${Math.floor(Math.random() * 360)},` +
               `${Math.floor(Math.random() * 100)}%,` +
               `${Math.round(hsl[2] * 100 - 5)}%)`;
  }
}

function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  const vmax = Math.max(r, g, b), vmin = Math.min(r, g, b);
  let h, s, l = (vmax + vmin) / 2;

  if (vmax === vmin) {
    return [0, 0, l]; // achromatic
  }

  const d = vmax - vmin;
  s = l > 0.5 ? d / (2 - vmax - vmin) : d / (vmax + vmin);
  if (vmax === r) h = (g - b) / d + (g < b ? 6 : 0);
  if (vmax === g) h = (b - r) / d + 2;
  if (vmax === b) h = (r - g) / d + 4;
  h /= 6;

  return [h, s, l];
}

function init() {
  const resetButton = document.querySelector('#reset-button');
  const modal = document.querySelector('#reset-modal');
  const form = document.querySelector('#reset-form');
  // const submitButton = document.querySelector('#modal-submit');
  const cancelButton = document.querySelector('#modal-cancel');

  // Add modal button events
  resetButton.addEventListener('click', () => modal.showModal());
  form.addEventListener('submit', resetGrid);
  // cancelButton.addEventListener('click', () => resetGrid());
  cancelButton.addEventListener('click', () => modal.close());
  
  generateGrid();
}

init();
