<template>
  <div class="container">
    <div class="row">
    <div class="col-md-12">
      <nav class="navbar navbar-expand-lg mb-4 navbar-light bg-light">
        <div class="navbar-collapse">
          <div class="navbar-nav">
            <router-link to="/" class="nav-item nav-link">Listar Produtos  &nbsp;|</router-link>
            <router-link to="/create" class="nav-item nav-link">Criar Produto  &nbsp;|</router-link>
            <router-link to="/brands" class="nav-item nav-link">Listar Marcas</router-link>
          </div>
        </div>
      </nav>
      <router-view> </router-view>
    </div>
    </div>
  </div>
  <footer class="bd-footer py-4 py-md-5 mt-5 bg-light">
    <div class="container py-4 py-md-5 px-4 px-md-3">
      <div class="row">
        <h5>@andrei.doberstein</h5>
      </div>
      <div class="row">
        <h6>Desenvolvedor FullStack PHP</h6>
      </div>
    </div>
  </footer>
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
