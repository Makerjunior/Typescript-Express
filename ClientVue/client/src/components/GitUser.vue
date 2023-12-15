<template>
  <div id="app">
    <div v-if="userData">
      <h1>{{ userData.name }}</h1>
      <img :src="userData.avatar_url" alt="Avatar">
      <p>Followers: {{ userData.followers }}</p>
      <p>Following: {{ userData.following }}</p>
      <!-- Adicione mais campos conforme necessário -->
    </div>
    <button @click="getUserData">Carregar Dados do Usuário</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GitUser',
  data() {
    return {
      userData: null,
    };
  },
  methods: {
    async getUserData() {
      try {
        const response = await axios.get('https://api.github.com/users/Makerjunior');
        this.userData = response.data;
      } catch (error) {
        console.error('Erro na requisição:', error.message);
      }
    },
  },
};
</script>

<style>
/* Adicione estilos conforme necessário */
</style>
