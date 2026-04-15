// Определяем API URL в зависимости от окружения
const API_URL = window.location.hostname === "localhost" 
  ? "http://localhost:4000/api" 
  : "/api";

// Регистрация пользователя
export async function registerUser(email, password) {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    return await res.json();
  } catch (error) {
    console.error("Registration error:", error);
    return { error: error.message };
  }
}

// Логин пользователя
export async function loginUser(email, password) {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    return await res.json();
  } catch (error) {
    console.error("Login error:", error);
    return { error: error.message };
  }
}

// Выход из системы
export function logoutUser() {
  localStorage.removeItem("userSession");
  localStorage.removeItem("currentUser");
}

// Проверка авторизации
export function isAuthenticated() {
  return localStorage.getItem("userSession") !== null;
}

// Получение текущего пользователя
export function getCurrentUser() {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
}

// Сохранение сессии
export function saveSession(sessionData) {
  localStorage.setItem("userSession", JSON.stringify(sessionData));
  if (sessionData.user) {
    localStorage.setItem("currentUser", JSON.stringify(sessionData.user));
  }
}