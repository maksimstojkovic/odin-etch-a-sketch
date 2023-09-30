function resetGrid() {
  const modal = document.querySelector('#reset-modal');
  const rows = parseInt(modal.querySelector('#modal-row-count').value);
  const cols = parseInt(modal.querySelector('#modal-column-count').value);
  
  modal.close();
  
  if (!Number.isFinite(rows) || !Number.isFinite(cols) ||
      rows < 1 || cols < 1) {
    return;
  }

  generateGrid(rows, cols);
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
        cell.style.backgroundColor = 'black';
      });
      
      row.appendChild(cell);
    }
  }
}

function init() {
  const resetButton = document.querySelector('#reset-button');
  const modal = document.querySelector('#reset-modal');
  const submitButton = document.querySelector('#modal-submit');
  const cancelButton = document.querySelector('#modal-cancel');

  // Add modal button events
  resetButton.addEventListener('click', () => modal.showModal());
  submitButton.addEventListener('click', resetGrid);
  cancelButton.addEventListener('click', () => modal.close());
  
  generateGrid();
}

init();
