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
