document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('load-data-button');
    button.addEventListener('click', async () => {
        try {
            const response = await fetch('/api/items');
            const items = await response.json();
            const output = document.getElementById('output');
            output.innerHTML = items.map(item => `
                <div>
                    <h3>${item.title}</h3>
                    <p><strong>Author:</strong> ${item.author}</p>
                    <p>${item.description}</p>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});
