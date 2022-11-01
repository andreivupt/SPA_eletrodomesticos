<template>
  <div class="container">
    <div class="row">
    <div class="col-md-12">
      <nav class="navbar navbar-expand-lg mb-4 navbar-light bg-light">
        <div class="navbar-collapse">
          <div class="navbar-nav">
            <router-link to="/" class="nav-item nav-link">Listar Produtos</router-link>
            <router-link to="/create" class="nav-item nav-link">Criar Produto</router-link>
          </div>
        </div>
      </nav>
      <router-view> </router-view>
    </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
