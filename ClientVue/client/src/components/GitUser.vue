<template>
  <div id="app">
    <div v-if="userData.data">
      <h1>{{ userData.data.name }}</h1>
      <img :src="userData.data.avatar_url" alt="Avatar">
      <p><a :href=userData.data.html_url>Github</a> </p> 
      <p>Followers: {{ userData.data.followers }}</p>
      <p>Following: {{ userData.data.following }}</p>
      <!-- Adicione mais campos conforme necessário -->
    </div>
    <button @click="getUserData">Carregar Dados do Usuário</button>
  </div>
</template>

<script>
import usuarios from'../service/usuario';

export default {
  name: 'GitUser',
  data() {
    return {
      userData: null,
    };
  },
  mounted() {
    usuarios.listar().then(res=>{
      console.log(res)
     this.userData=res;
    })
  },
  methods: {
    getUserData() {
      const username = prompt('Digite o nome de usuário no Github');
      if (username !== null) {
        usuarios.buscarPorNome(username).then((response) => {
          this.userData = response;
          }).catch(()=>{
            alert(`Erro ao buscar dados do usuário ${username}`);
          });
      }
    },
  },


};
</script>

<style>
/* Adicione estilos conforme necessário */
img{
  width: 20%;
}
</style>
