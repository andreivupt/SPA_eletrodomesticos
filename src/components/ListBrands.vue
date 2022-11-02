<template>
  <div>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-12"
             v-for="product in products"
             :key="product.id"
        >
          <div class="card mb-4">
            <div class="card-header">
              <span># {{ product.id }}</span>
            </div>

            <div class="card-body">
              <h5 class="card-title">{{ product.DS_BRAND }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListBrands",
  data() {
    return {
      products: [],
    }
  },
  created() {
    try {
      this.$axios
          .get('http://localhost:8989/api/products')
          .then((res) => {
            if (res.status == 200) {
              this.products = res.data.data;
              this.$toast.info(`API esta rodando`);
            } else {
              this.$toast.warning(`OOPS! Desculpe, estamos com algum problema`);
            }
          })
          .catch(err => {
            this.$toast.error('OOOPS! Tivemos algum problema, não foi possível listar os produtos!');
            if (err.response) {
              console.log(err.response.status);
            }
            else if (err.request) {
              console.log(err.request);
            }
            else {
              console.log(err.message);
            }
          })
    } catch (err) {
      this.$toast.error('OOOPS! Tivemos algum problema, não foi possível listar os produtos!');
      console.log('Erro ao tentar exibir produtos: ' + err);
    }
  },
}
</script>

<style scoped>

</style>