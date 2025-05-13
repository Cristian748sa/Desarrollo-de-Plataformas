document.addEventListener('DOMContentLoaded', () => {
    // Función para copiar al portapapeles
    const copyToClipboard = (text, message) => {
        navigator.clipboard.writeText(text).then(() => {
            const notification = document.createElement('div');
            notification.className = 'copy-notification';
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 2000);
        }).catch(err => console.error('Error al copiar:', err));
    };

    // Eventos para elementos copiables
    document.querySelectorAll('.copy-trigger').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const text = e.target.textContent.replace(/^[^:]+:\s*/, '');
            const message = element.classList.contains('mail') 
                ? '¡Email copiado!' 
                : '¡Teléfono copiado!';
            
            copyToClipboard(text, message);
        });
    });

    // Efecto de carga inicial
    setTimeout(() => {
        document.querySelector('.profile-card').classList.add('loaded');
    }, 100);
});