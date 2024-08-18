const app = Vue.createApp({
    data() {
      return {
        //Define dos propiedades 'firstName' y 'lastName
        firstName: '',
        lastName: ''
      };
    },
    computed: {
      //Aqui se define una propiedad computada llamada 'fullName', Esta propiedad concatena 
      //'firstName' y 'lastName' para crear el nombre completo.
      
      fullName() {
        return `${this.firstName} ${this.lastName}`;
      }
    }
  });

  app.mount('#app');