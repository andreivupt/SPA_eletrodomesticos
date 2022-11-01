<template>
  <div>
    <h3 class="text-center">Novo Produto</h3>
    <form @submit.prevent="addProduct">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nome do produto</label>
            <input type="text" class="form-control" required v-model="product.DS_NAME">
          </div>
          <div class="form-group">
            <label>Descrição</label>
            <input type="text" class="form-control" required v-model="product.DS_DESCRIPTION">
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label>Marca</label>
            <input type="text" class="form-control" required v-model="product.DS_BRAND">
          </div>
          <div class="form-group">
            <label>Tensão</label>
            <input type="text" class="form-control" required v-model="product.NM_TENSION">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Valor</label>
            <input type="text" class="form-control" required v-model="product.NM_VALUE">
          </div>
          <div class="form-group">
            <label>Status</label>
            <input type="text" class="form-control" required v-model="product.FL_STATUS">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Código de barras</label>
            <input type="text" class="form-control" required v-model="product.NM_BAR_CODE">
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
  name: "CreateProduct",
  data() {
    return {
      product: {}
    }
  },
  methods: {
    addProduct() {
      try {
        this.$axios
            .post('http://localhost:8989/api/product', this.product)
            .then((res) => {
              console.log(res)
              this.$router.push({name: 'home'})
            })
            .catch(err => console.log(err))
            .finally(() => this.loading = false)
      } catch (err) {
        alert('Erro ao tentar criar produto');
      }
    }
  }
}
</script>

<style scoped>

</style>