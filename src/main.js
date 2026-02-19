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

const loadTasks = async () => {
  try {
    document.querySelector('#data').innerHTML = `load`;
    const taskList = await base44.entities.Task.list();
    let taskHtml = 'Tasks:<br/>';
    for (const task of taskList) {
      taskHtml += `<li>${task.title || JSON.stringify(task)}</li>`;
    }
    document.querySelector('#data').innerHTML = taskHtml;
  } catch (error) {
    document.querySelector('#data').innerHTML = `error`;
    console.error('Error loading tasks:', error);
  }
};

loadTasks();
