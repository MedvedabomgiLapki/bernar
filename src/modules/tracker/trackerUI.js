import { getMainContainer } from "../../core/uiContainer.js";
import { getLeaderboard, addEntry, loadLeaderboard } from "./tracker.js";

export function renderTrackerUI() {
  const container = getMainContainer();
  loadLeaderboard();
  const leaderboard = getLeaderboard();
  
  container.innerHTML = `
    <div class="tracker-module">
      <h2>🏆 Трекер активности</h2>
      <form id="add-entry-form" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
        <input type="text" id="entry-name" placeholder="Имя" style="flex: 1; padding: 8px; min-width: 200px;" required />
        <input type="number" id="entry-points" placeholder="Баллы" min="1" style="width: 100px; padding: 8px;" required />
        <button type="submit" style="padding: 8px 16px; background: #FF9800; color: white; border: none; cursor: pointer; border-radius: 5px;">Добавить</button>
      </form>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #2a2a2a;">
            <th style="padding: 10px; text-align: left;">#</th>
            <th style="padding: 10px; text-align: left;">Имя</th>
            <th style="padding: 10px; text-align: left;">Баллы</th>
            <th style="padding: 10px; text-align: left;">Дата</th>
          </tr>
        </thead>
        <tbody>
          ${leaderboard.map((entry, index) => `
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 10px;">${index + 1}</td>
              <td style="padding: 10px;">${entry.name}</td>
              <td style="padding: 10px; color: #4CAF50;">${entry.points}</td>
              <td style="padding: 10px; opacity: 0.6;">${new Date(entry.createdAt).toLocaleDateString()}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  
  document.getElementById('add-entry-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('entry-name').value;
    const points = parseInt(document.getElementById('entry-points').value);
    addEntry({ name, points });
    renderTrackerUI();
  });
}