import { createClient } from "@base44/sdk";

const base44 = createClient({
  appId: "---your-app-id---",
});

const root = document.querySelector('#root');
root.innerHTML = `
  <h1>Base44 Minimal!</h1>
  <p>Content without React.</p>
  <div id="data">Info...</div>
`;

const loadData = async () => {
  try {
    document.querySelector('#data').innerHTML = `load`;
    const taskList = await base44.entities.Task.list();
    const noteList = await base44.entities.Note.list();
    let taskHtml = 'Data:<hr/>';
    for (const task of taskList) {
      taskHtml += `<li>task: ${task.title || JSON.stringify(task)}</li>`;
    }
    for (const note of noteList) {
      taskHtml += `<li>note: ${note.message || JSON.stringify(note)}</li>`;
    }
    document.querySelector('#data').innerHTML = taskHtml;
  } catch (error) {
    document.querySelector('#data').innerHTML = `error`;
    console.error('Error loading data:', error);
  }
};

loadData();
