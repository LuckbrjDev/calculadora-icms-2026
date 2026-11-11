const estados = {
  AC: 'Acre',
  AL: 'Alagoas',
  AM: 'Amazonas',
  AP: 'Amapá',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RJ: 'Rio de Janeiro',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins'
};

const ufs = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RN', 'RS', 'RJ', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

const valores = [
  [19, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 21.5, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 20, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 18, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 20.5, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 20, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 20, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 19, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 23, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 18, 7, 7, 12, 7, 7, 7, 12, 12, 7, 7, 12, 12, 7, 7],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 19, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 20, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 12, 7, 7, 19.5, 7, 7, 7, 12, 12, 7, 7, 12, 12, 7, 7],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 20.5, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 22.5, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 20, 12, 12, 12, 12, 12, 12, 12, 12],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 12, 7, 7, 12, 7, 7, 7, 17, 12, 7, 7, 12, 12, 7, 7],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 12, 7, 7, 12, 7, 7, 7, 12, 22, 7, 7, 12, 12, 7, 7],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 19.5, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 20, 12, 12, 12, 12],
  [7, 7, 7, 7, 77, 7, 7, 7, 7, 7, 7, 7, 12, 7, 7, 12, 7, 7, 7, 12, 12, 7, 7, 17, 12, 7, 7],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 12, 7, 7, 12, 7, 7, 7, 12, 12, 7, 7, 12, 18, 7, 7],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 20, 12],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 20]
];

const origemSelect = document.querySelector('#origem');
const destinoSelect = document.querySelector('#destino');
const internaEl = document.querySelector('#aliquotaInterna');
const interestadualEl = document.querySelector('#aliquotaInterestadual');
const detalheInternaEl = document.querySelector('#detalheInterna');
const detalheInterestadualEl = document.querySelector('#detalheInterestadual');
const table = document.querySelector('#icmsTable');
const themeToggle = document.querySelector('#themeToggle');

function formatRate(value) {
  return `${String(value).replace('.', ',')}%`;
}

function getValue(origem, destino) {
  return valores[ufs.indexOf(origem)][ufs.indexOf(destino)];
}

function fillSelect(select, selectedUf) {
  select.innerHTML = ufs.map((uf) => {
    const selected = uf === selectedUf ? ' selected' : '';
    return `<option value="${uf}"${selected}>${uf} - ${estados[uf]}</option>`;
  }).join('');
}

function renderTable() {
  const headCells = ['<th>Origem \\ Destino</th>', ...ufs.map((uf) => `<th data-col="${uf}">${uf}</th>`)].join('');
  const bodyRows = ufs.map((origem, rowIndex) => {
    const cells = ufs.map((destino, colIndex) => {
      const diagonalClass = origem === destino ? ' diagonal' : '';
      return `<td data-row="${origem}" data-col="${destino}" class="${diagonalClass}">${formatRate(valores[rowIndex][colIndex])}</td>`;
    }).join('');
    return `<tr><th data-row="${origem}">${origem}</th>${cells}</tr>`;
  }).join('');

  table.innerHTML = `<thead><tr>${headCells}</tr></thead><tbody>${bodyRows}</tbody>`;
}

function clearHighlights() {
  table.querySelectorAll('.is-row, .is-col, .is-interestadual, .is-interna').forEach((element) => {
    element.classList.remove('is-row', 'is-col', 'is-interestadual', 'is-interna');
  });
}

function updateResults() {
  const origem = origemSelect.value;
  const destino = destinoSelect.value;
  const interna = getValue(destino, destino);
  const interestadual = getValue(origem, destino);

  internaEl.textContent = formatRate(interna);
  interestadualEl.textContent = formatRate(interestadual);
  detalheInternaEl.textContent = `${destino} + ${destino} (${estados[destino]})`;
  detalheInterestadualEl.textContent = `${origem} + ${destino}`;

  clearHighlights();
  table.querySelectorAll(`[data-row="${origem}"]`).forEach((element) => element.classList.add('is-row'));
  table.querySelectorAll(`[data-col="${destino}"]`).forEach((element) => element.classList.add('is-col'));
  table.querySelector(`td[data-row="${origem}"][data-col="${destino}"]`)?.classList.add('is-interestadual');
  table.querySelector(`td[data-row="${destino}"][data-col="${destino}"]`)?.classList.add('is-interna');
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark', isDark);
  themeToggle.checked = isDark;
  localStorage.setItem('icms-theme', theme);
}

function getInitialTheme() {
  const savedTheme = localStorage.getItem('icms-theme');
  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

fillSelect(origemSelect, 'SP');
fillSelect(destinoSelect, 'PR');
renderTable();
applyTheme(getInitialTheme());
updateResults();

origemSelect.addEventListener('change', updateResults);
destinoSelect.addEventListener('change', updateResults);
themeToggle.addEventListener('change', () => applyTheme(themeToggle.checked ? 'dark' : 'light'));
