// Creamos una nueva instancia de la aplicación Vue.

const app = Vue.createApp({});

// Registramos un nuevo componente llamado 'my-component'.

app.component('my-component', {

    template: `
        <div>
            <!-- Campo de entrada que está vinculado a la variable reactiva 'inputValue'. -->
            <!-- 'v-model' asegura que el valor del campo de entrada esté sincronizado con 'inputValue'. -->
            <input v-model="inputValue" type="text" placeholder="Escribe algo...">
            
            <!-- Botón que al hacer clic ejecutará la función 'showAlert'. -->
            <button @click="showAlert">Mostrar valor</button>
        </div>
    `,
    // La función `data` devuelve un objeto con datos reactivos para el componente.
   
    data() {
        return {
            inputValue: ''  // Inicialmente, 'inputValue' es una cadena vacía.
        };
    },
    // La propiedad `methods` contiene funciones que pueden ser llamadas desde el template.
   
    methods: {
        showAlert() {
            // Muestra el valor actual de 'inputValue' en una ventana de alerta.
            alert(this.inputValue);
        }
    }
});

app.mount('#app');
