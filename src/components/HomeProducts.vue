<template>
  <div>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-4"
             v-for="product in products"
             :key="product.id"
        >
          <div class="card mb-2">
            <div class="card-header">
              <span># {{ product.NM_CODE }}</span>
              <div class="position-absolute top-0 end-0">
                <button type="button" class="btn-close" aria-label="Close"></button>
              </div>
            </div>

            <div class="card-body">
              <h5 class="card-title">{{ product.DS_NAME }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ product.DS_BRAND }}</h6>
              <div class="card-item">
                {{ product.DS_DESCRIPTION }}
              </div>
              <div class="card-item mb-4">
                <span>Voltagem: </span> {{ product.NM_TENSION }}
              </div>
              <div class="row">
                <div class="btn-group" role="group">
                  <router-link :to="{name: 'edit', params: { id: product.id }}" class="btn btn-success">Edit</router-link>
                  <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeProducts",
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
            this.products = res.data.data;
          })
    } catch (err) {
      alert('Erro ao tentar exibir produtos');
    }
  },
  methods: {
    deleteProduct(id) {
      try {
        this.$axios
            .delete(`http://localhost:8989/api/product/${id}`)
            .then(response => {
              console.log(response)
              this.$router.push({name: 'home'})
            });
      } catch (err) {
        alert('Erro ao tentar excluir produto');
      }
    }
  }
}
</script>

<style scoped>

</style>