const app = document.getElementById('app');
//inyeccion html en el DOM desde js
app.innerHTML = `
  <header>
    <h2>🧠 Desafía tu Memoria🧠</h2>
    <nav>
      <a href="#">Inicio</a>
      <a href="#">Instrucciones</a>
      <a href="#">Subscribirse</a>
    </nav>
  </header>
<!--seccion principal de la aplicacion-->
  <main>
    <h1>Juego de Memoria</h1>
    <div class="controls">
      <button id="startBtn">Iniciar Juego</button>
      
      <div id="score">Puntaje: <span >0</span></div>
    </div>
    <div id="gameBoard" class="board"></div>
  </main>
<!--seccion de pie de pagina-->
  <footer>
    <p>&copy; 2025 - Card Matching Game| Creado FSJ29</p>
  </footer>
`;
//construcccion de arreglo con los iconos de las tarjetas
const symbols = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
];


// Variables globales
let cards = [];
let flippedCards = [];
let lockBoard = false;
let score = 0;

// Elementos capturados del DOM
const gameBoard = document.getElementById('gameBoard');
const scoreSpan = document.querySelector('#score span');
const startBtn = document.getElementById('startBtn');


// Eventos de los botones
startBtn.addEventListener('click', startGame);



// Funcion que Crea las tarjetas y las mezcla
function createCards() {
  const fullSet = [...symbols, ...symbols];
  const shuffled = fullSet.sort(() => 0.5 - Math.random());

  gameBoard.innerHTML = '';
  cards = [];

  shuffled.forEach(symbol => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.symbol = symbol;

    card.innerHTML = `
      <div class="card-inner">
      <div class="card-front">
        <img src="${symbol}" alt="logo" />
      </div>
        <div class="card-back">❔</div>
      </div>
    `;

    card.addEventListener('click', () => flipCard(card));
    gameBoard.appendChild(card);
    cards.push(card);
  });
}

// Funcion que voltea las tarjetas y verifica si hay coincidencias
function flipCard(card) {
  if (lockBoard || card.classList.contains('matched') || card.classList.contains('flipped')) return;

  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    lockBoard = true;
    checkMatch();
  }
}


// Funcion que verifica si las tarjetas volteadas son iguales
function checkMatch() {
  const [card1, card2] = flippedCards;
  const isMatch = card1.dataset.symbol === card2.dataset.symbol;

  setTimeout(() => {
    if (isMatch) {
      card1.classList.add('matched');
      card2.classList.add('matched');
      score++;
      scoreSpan.textContent = score;
    } else {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
    }
    flippedCards = [];
    lockBoard = false;
  }, 2000);
}

// Funcion que inicia el juego, crea las tarjetas y muestra las cartas por un tiempo breve
function startGame() {
  createCards();
  score = 0;
  
  flippedCards = [];
  lockBoard = true;

  // Mostramos los logos por un breve tiempo
  setTimeout(() => {
    cards.forEach(card => card.classList.add('flipped'));

    // Ocultamos después de 1 segundo (quitamos flipped)
    setTimeout(() => {
      cards.forEach(card => card.classList.remove('flipped'));
      lockBoard = false;
    }, 1000);

  }, 50); // Esperamos a que el DOM se actualice
}

