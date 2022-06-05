<template>
  <form class="row g-3 form-center">
      <p class="h6">Conexão com Banco de Dados</p>
        <div class="col-md-6">
          <div class="input-group"> 
            <span class="input-group-text">Usuário</span>
            <input v-model="user" type="text" class="form-control" id="user" autocomplete="off"/>
          </div>
        </div>
          
        <div class="col-md-6"> 
          <div class="input-group">
            <span class="input-group-text">Senha</span>
            <input v-model="password" type="password" class="form-control" id="password" autocomplete="off"/>
          </div>
        </div>

        <div class="col-md-3"> 
          <div class="input-group">
            <span class="input-group-text">Host</span>
            <input v-model="host" type="text" class="form-control" id="host"/>
          </div>
        </div> 

        
        <div class="col-md-3"> 
            <div class="input-group"> 
              <span class="input-group-text">Porta</span> 
              <input v-model="port" type="text" class="form-control" id="port">
            </div>
          
        </div>

        <div class="col-md-3">
          <button class="btn btn-primary" @click="testConnection">Testar conexão</button>
        </div>

        <div class="col-md-12"> 
          <button :class="{'btn-primary': isConnectionTested, 'btn-secondary': !isConnectionTested}" class="btn"
          :disabled="!isConnectionTested">Continuar</button>
        </div>


            
      
      
  </form>
</template>


<script setup>
  import { ref } from "vue"
 
  //V-Model Variables
  const user      = ref("")
  const password  = ref("") 
  const host      = ref("")
  const port      = ref("")

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

.form-center{
  margin-top: 2%;
}

div{
  padding: .25%;
}

</style>