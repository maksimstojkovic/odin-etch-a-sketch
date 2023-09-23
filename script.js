const rows = 16;
const cols = 16;
const container = document.querySelector("#grid");

for (let i = 0; i < rows; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);

  for (let j = 0; j < cols; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    row.appendChild(cell);
  }
}