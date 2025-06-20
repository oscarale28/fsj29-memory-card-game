import { CARDS, ICON_URL } from "./consts";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <header>
    <img src="${ICON_URL}" class="app-logo" alt="Cards logo" />
    <div class="app-title">
      <h1>Memory Card Game</h1>
      <h2>Kodigo Bootcamp FSJ29</h2>
    </div>
  </header>

   <main>
      ${CARDS.map((_, index) => {
        return `
            <div class="card" data-index="${index}">
            </div>
          `;
      }).join("")}
    </main>
`;
