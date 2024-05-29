document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const surveyId = parseInt(urlParams.get('id'), 10);

    const surveys = [
        {
            "id": 1,
            "title": "Encuesta de Tecnología y Sociedad",
            "questions": [
                { "question": "¿Qué tan dependiente te sientes de la tecnología en tu vida diaria?", "options": ["📱 Muy dependiente", "📱 Dependiente", "📱 Poco dependiente", "📱 No dependiente"] },
                { "question": "¿Cuántas horas al día pasas utilizando dispositivos electrónicos?", "options": ["🕒 Menos de 2 horas", "🕒 2-4 horas", "🕒 4-6 horas", "🕒 Más de 6 horas"] },
                { "question": "¿Qué aplicación consideras indispensable en tu teléfono móvil?", "options": ["📱 Redes sociales", "📧 Correo electrónico", "💬 Aplicaciones de mensajería", "📊 Herramientas de productividad", "📱 Otra aplicación"] },
                { "question": "¿Qué impacto crees que tiene la tecnología en las relaciones personales?", "options": ["🤝 Facilita la comunicación", "🤳 Dificulta la comunicación cara a cara", "🔄 Ambos", "❓ No estoy seguro"] },
                { "question": "¿Prefieres leer en formato digital o en papel?", "options": ["📚 Digital", "📖 Papel", "🔀 Depende del contenido"] },
                { "question": "¿Qué opinas sobre el avance de la inteligencia artificial?", "options": ["🤖 Es emocionante, ofrece grandes oportunidades", "🤖 Es preocupante, podría tener consecuencias negativas", "🔄 Es una mezcla de emocionante y preocupante", "❓ No estoy seguro"] },
                { "question": "¿Qué te preocupa más sobre la privacidad en línea?", "options": ["🔒 Uso de datos por parte de empresas", "🛡️ Riesgo de ciberataques", "🔍 Vulnerabilidad de información personal", "👀 Monitorización por parte del gobierno", "❓ Otras preocupaciones"] },
                { "question": "¿Qué papel crees que debería jugar la tecnología en la educación?", "options": ["🎓 Facilitar el acceso a la educación", "📈 Mejorar la calidad de la enseñanza", "📚 Personalizar el aprendizaje", "🔄 Desafiar el modelo tradicional de enseñanza", "❓ Otro papel"] },
                { "question": "¿Cuál es tu opinión sobre la influencia de las redes sociales en la sociedad?", "options": ["🌐 Es positiva, conecta a personas de todo el mundo", "👥 Es negativa, fomenta la comparación y la baja autoestima", "🔄 Es una combinación de positiva y negativa", "❓ No estoy seguro"] },
                { "question": "¿Qué avance tecnológico crees que tendrá el mayor impacto en los próximos años?", "options": ["🚀 Inteligencia artificial", "🌐 Internet de las cosas", "🕶️ Realidad virtual/realidad aumentada", "🔗 Blockchain", "❓ Otro avance tecnológico"] }
            ]
        },
        
        {
            "id": 2,
            "title": "Encuesta sobre Experiencias de Viaje",
            "questions": [
                { "question": "¿Cuál es tu tipo de viaje favorito?", "options": ["🌄 Aventura", "🏖️ Relax", "🕌 Cultural", "🍽️ Gastronómico", "🌍 Otro tipo de viaje"] },
                { "question": "¿Qué factor es más importante para ti al planificar un viaje?", "options": ["📍 Destino", "💰 Presupuesto", "🎉 Actividades disponibles", "🏨 Comodidades del alojamiento", "🔄 Otros factores"] },
                { "question": "¿Prefieres viajar solo, en pareja, con amigos o en familia?", "options": ["👤 Solo", "👫 En pareja", "👭 Con amigos", "👨‍👩‍👧‍👦 Con familia", "🔄 Depende del viaje"] },
                { "question": "¿Qué destino está en tu lista de deseos para futuros viajes?", "options": ["🏝️ Playas tropicales", "🏙️ Ciudades históricas", "🏔️ Montañas y naturaleza", "🌴 Destinos exóticos", "🔄 Otros destinos"] },
                { "question": "¿Cuál ha sido tu experiencia de viaje más memorable hasta ahora?", "options": ["😌 Relajante y tranquila", "😁 Emocionante y aventurera", "🎨 Cultural e inspiradora", "😲 Inesperada y sorprendente", "🔄 Otra experiencia"] },
                { "question": "¿Qué te motiva a viajar?", "options": ["🌍 Explorar nuevas culturas", "🤝 Conocer gente nueva", "🏃 Escapar de la rutina", "🎭 Experimentar nuevas actividades", "🔄 Otras motivaciones"] },
                { "question": "¿Cuál es tu medio de transporte favorito para viajar?", "options": ["✈️ Avión", "🚄 Tren", "🚗 Coche", "⛵ Barco", "🔄 Otro medio de transporte"] },
                { "question": "¿Prefieres alojarte en hoteles, hostales, Airbnb u otro tipo de alojamiento?", "options": ["🏨 Hoteles", "🏠 Hostales", "🏡 Airbnb", "🔄 Otros tipos de alojamiento"] },
                { "question": "¿Qué aspecto de un viaje disfrutas más?", "options": ["🗺️ Planificar y anticipar", "🌐 Experimentar nuevas culturas", "🌳 Conectar con la naturaleza", "😌 Relajarse y descansar", "🔄 Otro aspecto"] },
                { "question": "¿Qué tipo de recuerdos sueles traer de tus viajes?", "options": ["📸 Fotografías", "🎁 Souvenirs locales", "🍲 Experiencias culinarias", "👫 Conexiones personales", "🔄 Otros tipos de recuerdos"] }
            ]
        },
        {
            "id": 3,
            "title": "Encuesta de Uso de Redes Sociales",
            "questions": [
                { "question": "¿Cuál es tu red social favorita?", "options": ["📘 Facebook", "🐦 Twitter", "📸 Instagram", "🎥 TikTok", "🔄 Otra"] },
                { "question": "¿Cuántas horas al día dedicas a las redes sociales?", "options": ["🕒 Menos de 1 hora", "🕒 1-2 horas", "🕒 2-4 horas", "🕒 Más de 4 horas"] },
                { "question": "¿Para qué usas principalmente las redes sociales?", "options": ["📸 Compartir fotos/videos", "📰 Leer noticias", "💬 Comunicarme con amigos/familia", "📈 Promocionar negocios", "🔄 Otro uso"] },
                { "question": "¿Qué tipo de contenido prefieres en las redes sociales?", "options": ["🎨 Contenido creativo", "📰 Noticias y actualidad", "🎬 Videos de entretenimiento", "📚 Contenido educativo", "🔄 Otro tipo de contenido"] },
                { "question": "¿Qué tan importante es para ti mantener tu privacidad en las redes sociales?", "options": ["🔒 Muy importante", "🔒 Importante", "🔓 Poco importante", "🔓 No importante"] },
                { "question": "¿Has comprado algún producto o servicio a través de anuncios en redes sociales?", "options": ["🛒 Sí, varias veces", "🛒 Sí, alguna vez", "🛒 No, pero estoy abierto a hacerlo", "🛒 No, nunca"] },
                { "question": "¿Participas activamente en grupos o comunidades en línea?", "options": ["👥 Sí, en varios grupos", "👥 Sí, en algunos grupos", "👥 No, pero me gustaría", "👥 No, nunca"] },
                { "question": "¿Qué opinas sobre los influencers en las redes sociales?", "options": ["🌟 Me gustan, sigo a varios", "🌟 Me gustan, pero sigo a pocos", "🌟 No me gustan, pero los sigo", "🌟 No me gustan y no los sigo"] },
                { "question": "¿Has experimentado acoso o comportamiento negativo en las redes sociales?", "options": ["🚫 Sí, con frecuencia", "🚫 Sí, alguna vez", "✅ No, nunca", "❓ Prefiero no decirlo"] },
                { "question": "¿Qué cambios te gustaría ver en las redes sociales?", "options": ["🔧 Más control de privacidad", "🔧 Menos anuncios", "🔧 Mejor moderación de contenido", "🔧 Nuevas funciones", "🔄 Otros cambios"] }
            ]
        },
    ];

    const survey = surveys.find(s => s.id === surveyId);
    if (!survey) {
        alert('Encuesta no encontrada');
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('survey-title').textContent = survey.title;
    const questionsContainer = document.getElementById('questions-container');

    survey.questions.forEach((q, index) => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        formGroup.innerHTML = `
            <label>${index + 1}. ${q.question}</label>
            ${q.options.map(option => `<div class="form-check"><input class="form-check-input" type="radio" name="question${index}" value="${option}" required><label class="form-check-label">${option}</label></div>`).join('')}
        `;
        questionsContainer.appendChild(formGroup);
    });

    const surveyForm = document.getElementById('survey-form');
    surveyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Marcar encuesta como completada
        let completedSurveys = JSON.parse(localStorage.getItem('completedSurveys')) || [];
        if (!completedSurveys.includes(surveyId)) {
            completedSurveys.push(surveyId);
            localStorage.setItem('completedSurveys', JSON.stringify(completedSurveys));
        }

        // Redirigir a la página de agradecimiento
        window.location.href = 'gracias.html';
    });

    // Manejar la barra de progreso
    const progressBar = document.getElementById('progress-bar');
    surveyForm.addEventListener('change', function() {
        const totalQuestions = surveyForm.querySelectorAll('.form-group').length;
        const answeredQuestions = surveyForm.querySelectorAll('input[type="radio"]:checked').length;
        const progress = (answeredQuestions / totalQuestions) * 100;
        progressBar.style.width = `${progress}%`;
    });
});
