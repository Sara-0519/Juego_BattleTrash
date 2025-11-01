const CONFIG = {
    API_URL: 
        window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:3000'
        : 'https://juego-battletrashintento.onrender.com',  
    POINTS: {
        CORRECT: 100,
        INCORRECT: -20
    },
    WASTE_ICONS: {
        organico: '🍎',
        reciclable: '♻️',
        no_reciclable: '🧻',
        peligroso: '⚠️'
    }
};