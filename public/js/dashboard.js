const ctx = document.getElementById('mainChart').getContext('2d');
const isDark = document.documentElement.classList.contains('dark');

// Gradiente para la gráfica
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
        datasets: [{
            data: [30, 45, 38, 52, 48, 65, 70],
            borderColor: '#10b981',
            backgroundColor: gradient,
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointBackgroundColor: '#10b981',
            pointBorderColor: isDark ? '#091E2C' : '#fff',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: isDark ? '#1e293b' : '#f1f5f9', drawBorder: false },
                ticks: { color: '#94a3b8', font: { size: 11 } }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8', font: { size: 11 } }
            }
        }
    }
});