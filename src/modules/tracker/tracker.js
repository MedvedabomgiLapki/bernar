let leaderboard = [];

export function getLeaderboard() {
  return leaderboard.sort((a, b) => b.points - a.points);
}

export function addEntry(entry) {
  const newEntry = {
    id: Date.now(),
    name: entry.name,
    points: entry.points,
    createdAt: new Date().toISOString()
  };
  leaderboard.push(newEntry);
  saveLeaderboard();
  return newEntry;
}

function saveLeaderboard() {
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

export function loadLeaderboard() {
  const saved = localStorage.getItem('leaderboard');
  if (saved) {
    leaderboard = JSON.parse(saved);
  }
  return leaderboard;
}