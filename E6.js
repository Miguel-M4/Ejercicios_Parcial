const { createApp, ref } = Vue; // Importa las funciones 'createApp' y 'ref' desde Vue.

const Calculator = {
    template: `
        <div>
            <!-- Campos de entrada para los dos números que se utilizarán en las operaciones. 
                 'v-model.number' enlaza el valor numérico del input con las variables 'num1' y 'num2'. -->
            <input v-model.number="num1" type="number" placeholder="Número 1">
            <input v-model.number="num2" type="number" placeholder="Número 2">

            <div>
                <!-- Botones para realizar las diferentes operaciones. Al hacer clic, se llama a la función 'calculate' con la operación correspondiente. -->
                <button @click="calculate('+')">Sumar</button>
                <button @click="calculate('-')">Restar</button>
                <button @click="calculate('*')">Multiplicar</button>
                <button @click="calculate('/')">Dividir</button>
                <!-- Botón para resetear los valores. -->
                <button @click="reset">Eliminar</button>
            </div>

            <!-- Muestra el resultado de la operación. -->
            <p>Resultado: {{ result }}</p>
        </div>
    `,
    setup() {
        // Define los valores reactivos para los números y el resultado.
        const num1 = ref(0);
        const num2 = ref(0);
        const result = ref(0);

        // Función para realizar la operación matemática basada en el operador recibido.
        const calculate = (operation) => {
            switch (operation) {
                case '+':
                    result.value = num1.value + num2.value; 
                    break;
                case '-':
                    result.value = num1.value - num2.value; 
                    break;
                case '*':
                    result.value = num1.value * num2.value;
                    break;
                case '/':
                    if (num2.value === 0) { 
                        result.value = 'Error: División por cero'; 
                    } else {
                        result.value = num1.value / num2.value;
                    }
                    break;
                default:
                    result.value = 'Operación desconocida'; 
                    break;
            }
        };

        // Función para resetear los valores a cero.
        const reset = () => {
            num1.value = 0;
            num2.value = 0;
            result.value = 0;
        };

        // Retorna los valores y funciones para que estén disponibles en el template.
        return { num1, num2, result, calculate, reset };
    }
};

createApp({
    components: { Calculator }
}).mount('#app'); 
