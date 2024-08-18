const app = Vue.createApp({
  data() {
    return {
      // Define dos propiedades reactivas:
      
      message: '',
      watchMessage: false
    };
  },
  watch: {
    // Define un watcher en la propiedad 'message'.
    
    message(newValue, oldValue) {
      // Comprueba si el nuevo valor de 'message' es diferente del antiguo.
      if (newValue !== oldValue) {
        // Si el mensaje ha cambiado, establece 'watchMessage' en true para mostrar el indicador o mensaje.
        this.watchMessage = true;
        // Después de 2 segundos, se restablece 'watchMessage' a false, ocultando el indicador.
        setTimeout(() => {
          this.watchMessage = false;
        }, 2000); // el indicador se oculta después de 2 segundos.
      }
    }
  }
});

app.mount('#app');
