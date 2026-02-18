import { createClient } from "@base44/sdk";

const base44 = createClient({
  appId: "---your-app-id---",
});

const root = document.querySelector('#root');
root.innerHTML = `
  <h1>Base44 Minimal!</h1>
  <p>Content without React.</p>
  <div id="data">Load info...</div>
`;
