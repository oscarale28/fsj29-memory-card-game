import { CARDS_ICONS, ICON_URL } from "./consts";
import "./style.css";

document.getElementById("app").innerHTML = `
<!-- Sección de encabezado de la aplicación -->
  <header>
    <div class="app-title-container">
      <img src="${ICON_URL}" class="app-logo" alt="Cards logo" />
      <div class="app-title">
        <h1>Card Matching Game</h1>
        <h2>Kodigo Bootcamp FSJ29</h2>
      </div>
    </div>
    <nav>
      <ul class="nav-list">
        <li><button class="nav-btn" id="instructions-btn">Instrucciones</button></li>
        <li><button class="nav-btn" id="developers-btn">Desarrolladores</button></li>
        <li>
          <a href="https://github.com/oscarale28/fsj29-memory-card-game" target="_blank" class="nav-link">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </nav>
  </header>
<!--Sección principal de la aplicación-->
  <main>
    <div class="controls">
      <button id="startBtn">Iniciar Juego</button>
      <div id="score">Puntaje: <span >0</span></div>
    </div>
    <div id="gameBoard" class="board"></div>
  </main>
<!--Sección de pie de página-->
  <footer>
    <p>&copy; 2025 - Card Matching Game| Creado FSJ29</p>
  </footer>

  <dialog id="app-dialog"></dialog>
`;

// Variables globales
let cards = [];
let flippedCards = [];
let lockBoard = false;
let score = 0;

// Elementos capturados del DOM
const gameBoard = document.getElementById("gameBoard");
const scoreSpan = document.querySelector("#score span");
const startBtn = document.getElementById("startBtn");

const instructionsBtn = document.getElementById("instructions-btn");
const developersBtn = document.getElementById("developers-btn");
const navButtons = [instructionsBtn, developersBtn];
const dialog = document.getElementById("app-dialog");

// Eventos de los botones
startBtn.addEventListener("click", startGame);

// Funcion que Crea las tarjetas y las mezcla
function createCards() {
  const fullSet = [...CARDS_ICONS, ...CARDS_ICONS];
  const shuffled = fullSet.sort(() => 0.5 - Math.random());

  gameBoard.innerHTML = "";
  cards = [];

  shuffled.forEach((symbol) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;

    card.innerHTML = `
      <div class="card-inner">
      <div class="card-front">
        <img src="${symbol}" alt="logo" loading="lazy" />
      </div>
        <div class="card-back"></div>
      </div>
    `;

    card.addEventListener("click", () => flipCard(card));
    gameBoard.appendChild(card);
    cards.push(card);
  });
}

// Funcion que voltea las tarjetas y verifica si hay coincidencias
function flipCard(card) {
  if (
    lockBoard ||
    card.classList.contains("matched") ||
    card.classList.contains("flipped")
  )
    return;

  card.classList.add("flipped");
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
      card1.classList.add("matched");
      card2.classList.add("matched");
      score++;
      scoreSpan.textContent = score;
    } else {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
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
    cards.forEach((card) => card.classList.add("flipped"));

    // Ocultamos después de 1 segundo (quitamos flipped)
    setTimeout(() => {
      cards.forEach((card) => card.classList.remove("flipped"));
      lockBoard = false;
    }, 1000);
  }, 50); // Esperamos a que el DOM se actualice
}

// Función para abrir el diálogo y renderizar el contenido
function showDialog(title, content) {
  document.body.style.overflow = "hidden"; // Evita el scroll al abrir el diálogo
  dialog.innerHTML = `
    <div class="dialog-content">
      <div class="dialog-header">
        <h2>${title}</h2>
        <button id="closeDialog">×</button>
      </div>
      <div class="dialog-body">
        ${content}
      </div>
    </div>
  `;
  dialog.showModal();

  // Eventos para cerrar el diálogo
  document.getElementById("closeDialog").addEventListener("click", () => {
    document.body.style.overflow = "auto"; // Restaura el scroll al cerrar el diálogo
    dialog.close();
  });
}

// Eventos para los botones de navegación
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "instructions-btn") {
      showDialog(
        "Instrucciones",
        `
        <p>El objetivo del juego es encontrar todos los pares de cartas que coinciden.</p>
        <p>Para jugar:</p>
        <ol>
          <li>Haz clic en una carta para voltearla.</li>
          <li>Haz clic en una segunda carta.</li>
          <li>Si las cartas coinciden, permanecerán volteadas.</li>
          <li>Si no coinciden, se voltearán de nuevo.</li>
          <li>Encuentra todos los pares para ganar.</li>
        </ol>
         `
      );
    } else if (btn.id === "developers-btn") {
      showDialog(
        "Desarrolladores",
        `
        <p>Este proyecto fue desarrollado por los estudiantes de KODIGO:</p>
        <ul>
          <li>Humberto Contreras</li>
          <li>Oscar Orellana</li>
          <li>Alexander Vásquez</li>
        </ul>
        `
      );
    }
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (dialog.open) {
      dialog.close();
      document.body.style.overflow = "auto";
    }
  }
});
