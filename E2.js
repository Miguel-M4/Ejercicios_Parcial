// Extraemos las funciones  de Vue para usarlas en nuestro código
const { createApp, ref } = Vue;


createApp({
    // El método `setup` es dondese define la lógica de nuestro componente  Composition API
    setup() {
       
        const titulo = ref('Contador');

       
        const cuenta = ref(0);

        // Definimos una función llamada `aumentar` que incrementa el valor de `cuenta`
        const aumentar = () => {
            cuenta.value++;
        };

      
        return {
            titulo,
            cuenta,
            aumentar
        };
    }

}).mount('#app');
