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
    document.querySelector('#data').innerHTML = `<div class="is-loading">load</div>`;
    const taskList = await base44.entities.Task.list();
    const noteList = await base44.entities.Note.list();
    let taskHtml = 'Data:<hr/>';
    for (const task of taskList) {
      taskHtml += `<li class="list-item item-task"><span class="item-label label-task">Task</span> ${task.title || JSON.stringify(task)}</li>`;
    }
    for (const note of noteList) {
      taskHtml += `<li class="list-item item-note"><span class="item-label label-note">Note</span> ${note.message || JSON.stringify(note)}</li>`;
    }
    document.querySelector('#data').innerHTML = taskHtml;
  } catch (error) {
    document.querySelector('#data').innerHTML = `<div class="is-error">error</div>`;
    console.error('Error loading data:', error);
  }
};

loadData();
