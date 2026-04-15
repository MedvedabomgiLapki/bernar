// Утилиты для работы с хранилищем

export const localStorageUtils = {
  // Tasks
  saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },
  
  getTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  },
  
  // Notes
  saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
  },
  
  getNotes() {
    const notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
  },
  
  // Tracker
  saveTrackerData(data) {
    localStorage.setItem("tracker", JSON.stringify(data));
  },
  
  getTrackerData() {
    const data = localStorage.getItem("tracker");
    return data ? JSON.parse(data) : [];
  },
  
  // User stats
  saveUserStats(stats) {
    localStorage.setItem("userStats", JSON.stringify(stats));
  },
  
  getUserStats() {
    const stats = localStorage.getItem("userStats");
    return stats ? JSON.parse(stats) : { points: 0, streak: 0 };
  },
  
  // Clear all data
  clearAll() {
    localStorage.clear();
  }
};