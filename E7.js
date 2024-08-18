const { createApp, ref, watchEffect } = Vue;
//se define el componente principal de la aplicacion 
    const App = {
      setup() {
        const isDarkMode = ref(false);
    //definimos la funcion para cambiar de temas
        const toggleTheme = () => {
          isDarkMode.value = !isDarkMode.value;
          document.body.className = isDarkMode.value ? 'dark' : 'light';
        };
//se utiliza para sincronizar el estado del tema al recargar la pagina 
        watchEffect(() => {
          document.body.className = isDarkMode.value ? 'dark' : 'light';
        });

        return {
          isDarkMode,
          toggleTheme,
        };
      },
      template: `
        <div>
          <button @click="toggleTheme">
            Cambiar a {{ isDarkMode ? 'Tema Claro' : 'Tema Oscuro' }}
          </button>
        </div>
      `,
    };

    createApp(App).mount('#app');