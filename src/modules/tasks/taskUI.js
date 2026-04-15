const TaskUI = {
    render(container, tasks) {
        // Фильтруем для статистики
        const completedCount = tasks.filter(t => t.status === 'completed').length;
        const pendingCount = tasks.length - completedCount;

        container.innerHTML = `
        <div class="module-header">
            <h2>✅ Задачи и привычки</h2>
            <div class="module-stats">
                <span>📋 Всего: ${tasks.length}</span>
                <span style="margin-left: 0.5rem;">⏳ В процессе: ${pendingCount}</span>
                <span class="stats-completed" style="margin-left: 0.5rem;">🎉 Готово: ${completedCount}</span>
            </div>
        </div>
        
        <form id="task-form" class="task-form">
            <div class="form-row">
                <input type="text" name="title" placeholder="✨ Новая задача или цель..." required autocomplete="off">
                <select name="type">
                    <option value="household">🏠 Дом и быт</option>
                    <option value="health">💊 Здоровье и спорт</option>
                    <option value="custom">🚀 Личные цели</option>
                    <option value="urgent">🔥 Срочно</option>
                </select>
                <button type="submit">➕ Добавить</button>
            </div>
        </form>
        
        <div class="tasks-grid">
            ${tasks.length === 0 ? `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <span class="empty-state-icon">📭</span>
                    <p>Список задач пуст</p>
                    <p class="empty-state-hint">Добавьте первую задачу выше!</p>
                </div>
            ` : ''}
            
            ${tasks.map(task => `
                <div class="task-card ${task.status} task-type-${task.type}" data-id="${task.id}">
                    <div class="task-header">
                        <h3>${task.title}</h3>
                        <span class="task-badge">${this.getTypeIcon(task.type)}</span>
                    </div>
                    <div class="task-meta">
                        <span class="task-date">📅 ${new Date(task.date).toLocaleDateString('ru-RU')}</span>
                        ${task.points ? `<span class="note-points">+${task.points} ⭐</span>` : ''}
                    </div>
                    <button class="task-toggle" data-id="${task.id}">
                        ${task.status === 'completed' 
                            ? '<span>↩️ Вернуть</span>' 
                            : '<span>✅ Выполнить</span>'}
                    </button>
                </div>
            `).join('')}
        </div>
        `;
    },
    
    getTypeIcon(type) {
        return {
            household: '🏠',   // Дом
            health: '💊',      // Здоровье (или 💪)
            custom: '🚀',      // Цели
            urgent: '🔥'       // Срочно
        }[type] || '📋';
    }
};