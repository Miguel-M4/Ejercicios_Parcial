// Definimos el componente
const WelcomeMessage = {
    template: `
        <div>
            <input v-model="state.name" placeholder="Escribe tu nombre">
            <p v-if="state.name">¡Bienvenido, {{ state.name }}!</p>
            <p v-else>Por favor, ingresa tu nombre.</p>
        </div>
    `,
    setup() {
        // En este apartado usamos el metodo reactive para almacenar el nombre 
        const state = Vue.reactive({
            name: ''
        });

        return { state };
    }
};

// Creamos la aplicacion de vue
Vue.createApp({
    components: {
        'welcome-message': WelcomeMessage
    }
}).mount('#app');