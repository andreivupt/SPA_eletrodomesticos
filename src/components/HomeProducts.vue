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
            </div>

            <div class="card-body">
              <h5 class="card-title">{{ product.DS_NAME }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ product.DS_BRAND }}</h6>
              <div class="card-item">{{ product.DS_DESCRIPTION }}</div>
              <div class="card-item">
                <span>Voltagem: </span> {{ product.NM_TENSION }}
              </div>
              <div class="card-item py-4">
                <strong>$ {{ product.NM_VALUE }}</strong>
              </div>
              <div class="row">
                <div class="btn-group" role="group">
                  <router-link :to="{name: 'edit', params: { id: product.id }}" class="btn btn-success">Alterar informações</router-link>
                  <button class="btn btn-danger" @click="deleteProduct(product.id)">Remover</button>
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
  methods: {
    deleteProduct(id) {
      try {
        this.$axios
            .delete(`http://localhost:8989/api/product/${id}`)
            .then(res => {
              console.log(res);
              this.$router.push({name: 'home'});
              this.$toast.success('SHOW! Temos um novo produto cadastrado!');
            })
            .catch(err => {
              this.$toast.error('OOOPS! Tivemos algum problema, não foi possível deletar o produto!');
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
        this.$toast.error('OOOPS! Tivemos algum problema, não foi possível deletar o produto!');
        console.log('Erro ao tentar excluir produto' + err);
      }
    }
  }
}
</script>

<style scoped>

</style>