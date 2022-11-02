<template>
  <div>
    <h3 class="text-center">Editar Produto</h3>
    <form @submit.prevent="updateProduct">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nome do produto</label>
            <input type="text" class="form-control" v-model="product.DS_NAME">
          </div>
          <div class="form-group">
            <label>Descrição</label>
            <input type="text" class="form-control" v-model="product.DS_DESCRIPTION">
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label>Marca</label>
            <input type="text" class="form-control" v-model="product.DS_BRAND">
          </div>
          <div class="form-group">
            <label>Tensão</label>
            <input type="text" class="form-control" v-model="product.NM_TENSION">
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label>Valor</label>
            <input type="text" class="form-control" v-model="product.NM_VALUE">
          </div>
          <div class="form-group">
            <label>Status</label>
            <input type="text" class="form-control" v-model="product.FL_STATUS">
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label>Código de barras</label>
            <input type="text" class="form-control" v-model="product.NM_BAR_CODE">
          </div>
        </div>

        <div class="mt-4">
          <button type="submit" class="btn btn-outline-primary btn-sm">Atualizar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditProduct",
  data() {
    return {
      product: {}
    }
  },
  created(){
    try {
      this.$axios
          .get(`http://localhost:8989/api/product/${this.$route.params.id}`)
          .then((res) => {
            console.log(res.data.data)
            this.product = res.data.data;
          });
    } catch (err) {
      alert('Erro ao tentar exibir produto');
    }

  },
  methods: {
    updateProduct() {
      try {
        this.$axios
            .put(`http://localhost:8989/api/product/${this.$route.params.id}`, this.product)
            .then((res) => {
              if (res.status == 200) {
                this.$router.push({ name: 'home' });
                this.$toast.success('Maravilha! Tudo certo com a edição do produto!');
              } else {
                this.$toast.warning('OOOPS! Tivemos algum problema, não foi possível editar o produto!');
              }
            })
            .catch(err => {
              this.$toast.error('OOOPS! Tivemos algum problema, não foi possível editar o produto! Verifique se todos os campos foram preenchidos e os valores informados');
              if (err.response) {
                console.log(err.response.status);
              }
              else if (err.request) {
                console.log(err.request);
              }
              else {
                console.log(err.message);
              }
            });
      } catch (err) {
        console.log('Erro ao tentar editar o produto: ' + err);
        this.$toast.error('OOOPS! Tivemos algum problema, não foi possível editar o produto!');
      }

    }
  }
}
</script>

<style scoped>

</style>