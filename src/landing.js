import './style.css'; // WICHTIG: Damit Tailwind geladen wird
import { createClient } from "@base44/sdk";

const base44 = createClient({
  appId: "69964d8a472e84f2aaa74aa7",
});

const root = document.querySelector('#root');
root.innerHTML = `
  <h1>Base44 Minimal!</h1>
  <p>Landing.</p>
  <div id="data">Info...</div>
`;
