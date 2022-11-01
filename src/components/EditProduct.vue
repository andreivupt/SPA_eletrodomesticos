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
      alert('Erro ao tentar editar produto');
    }

  },
  methods: {
    updateProduct() {
      this.$axios
          .put(`http://localhost:8989/api/product/${this.$route.params.id}`, this.product)
          .then((res) => {
            console.log(res)
            this.$router.push({ name: 'home' });
          });
    }
  }
}
</script>

<style scoped>

</style>