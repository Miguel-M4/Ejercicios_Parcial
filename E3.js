// Extraemos la función `ref`  para usarla en nuestro código.
// 
const { ref } = Vue;


const app = Vue.createApp({
    // `setup` es el lugar donde definimos la lógica de nuestro componente utilizando la Composition API.
    setup() {
        // se creo una variable reactiva llamada `isVisible`, que comienza en `false`.
        
        const isVisible = ref(false);

        // Definimos una función llamada `toggleMessage`, que cambia el valor de `isVisible`.
       
        const toggleMessage = () => {
            isVisible.value = !isVisible.value;
        };

        // Retornamos `isVisible` y `toggleMessage` para que estén disponibles en el template.
      
        return {
            isVisible,
            toggleMessage
        };
    }
});


app.mount('#app');
