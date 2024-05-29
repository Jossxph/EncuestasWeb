document.addEventListener('DOMContentLoaded', function() {
    const surveys = [
        { id: 1, title: 'Encuesta de Tecnología y Sociedad', img: 'img/encuesta1.png' },
        { id: 2, title: 'Encuesta sobre Experiencias de Viaje', img: 'img/encuesta2.png' },
        { id: 3, title: 'Encuesta de Uso de Redes Sociales', img: 'img/encuesta3.png' },
    ];

    const surveysContainer = document.getElementById('surveys-container');
    const completedSurveys = JSON.parse(localStorage.getItem('completedSurveys')) || [];

    surveys.forEach(survey => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        
        const isCompleted = completedSurveys.includes(survey.id);
        card.innerHTML = `
            <div class="card ${isCompleted ? 'completed' : ''}">
                <img src="${survey.img}" class="card-img-top" alt="${survey.title}">
                <div class="card-body">
                    <h5 class="card-title">${survey.title}</h5>
                    ${isCompleted ? '<p class="text-success">Encuesta completada</p>' : `<a href="encuesta.html?id=${survey.id}" class="btn btn-primary">Realizar Encuesta</a>`}
                </div>
            </div>
        `;
        surveysContainer.appendChild(card);
    });
});
