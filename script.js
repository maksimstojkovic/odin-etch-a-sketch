function resetGrid() {
  const modal = document.querySelector('#reset-modal');
  const sideCount = parseInt(modal.querySelector('#modal-side-count').value);
  
  
  if (!Number.isFinite(sideCount) || sideCount < 1 || sideCount > 100) {
    return false;
  }

  modal.close();
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
        cell.style.backgroundColor = 'white';
      });
      
      row.appendChild(cell);
    }
  }
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
