<template>
  <div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <form class="row c-12">
        <p class="h1 c-12 mb-5">Conexão com SQLServer de TU</p>
        <div class="form-group row">
          <label for="user" class="col-sm-2 col-form-label">Usuario</label>
          <div class="col-sm-10">
            <input v-model="user" type="text" class="form-control" id="user" placeholder="Usuario do banco de dados">
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="password" class="col-sm-2 col-form-label">Senha</label>
          <div class="col-sm-10">
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Senha">
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="host" class="col-sm-2 col-form-label">Host</label>
          <div class="col-sm-10">
            <input v-model="host" type="text" class="form-control" id="host" placeholder="Host">
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="port" class="col-sm-2 col-form-label">Porta</label>
          <div class="col-sm-10">
            <input v-model="port" type="text" class="form-control" id="port" placeholder="Porta">
          </div>
        </div>
        <div class="form-group row mt-5">
          <div class="col-6">
            <button :class="{'btn-primary': isConnectionTested, 'btn-secondary': !isConnectionTested}" class="btn"
              :disabled="!isConnectionTested">Continuar</button>
          </div>
          <div class="col-6">
            <button class="btn btn-primary" @click="testConnection">Testar conexão</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>



<script setup>
  import { ref } from "vue"

  //V-Model Variables
  const user      = ref("")
  const password  = ref("") 
  const host      = ref("")
  const port      = ref("1437")

  //Components Variables 

  const isConnectionTested = ref(false)


  //Functions 

  //const createConnection = () => null; 
  const testConnection = (event) => {
    event.preventDefault()

    isConnectionTested.value = true

    console.log("> Connection Tested")
  };



</script>

<style>
</style>