const { createApp, ref } = Vue; // Importa las funciones 'createApp' y 'ref' desde Vue.

const TaskList = {
    template: `
        <div>
            <!-- Campo de entrada para escribir una nueva tarea. Se agrega una tarea al presionar 'Enter'. -->
            <input v-model="newTask" @keyup.enter="addTask" placeholder="Nueva tarea">
            
            <!-- Lista ordenada de tareas, donde cada tarea tiene un botón para eliminarla. -->
            <ul>
                <li v-for="task in tasks" :key="task.id">
                    {{ task.text }} <!-- Muestra el texto de la tarea. -->
                    <button @click="removeTask(task.id)">Eliminar</button> <!-- Botón para eliminar la tarea. -->
                </li>
            </ul>
        </div>
    `,
    setup() {
        // Define un valor reactivo para la nueva tarea.
        const newTask = ref('');
       
        const tasks = ref([]);

        // Función para agregar una nueva tarea a la lista.
        const addTask = () => {
            
            if (newTask.value.trim() === '') return;
            
            tasks.value.push({ id: Date.now(), text: newTask.value });
           
            newTask.value = '';
        };

        // Función para eliminar una tarea de la lista por su ID.
        const removeTask = (taskId) => {
            
            tasks.value = tasks.value.filter(task => task.id !== taskId);
        };

        
        return { newTask, tasks, addTask, removeTask };
    }
};

createApp({
    components: { TaskList }
}).mount('#app'); 
