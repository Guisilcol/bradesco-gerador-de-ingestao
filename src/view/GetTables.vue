<template>
  <div class="container">
    <p class="h7 mt-3">Selecione as tabelas para a ingestão</p>

    <div class="row g-3" >
      <div class="col-md-6 ">
        <div class="input-group">
           <span class="input-group-text" id="basic-addon1">Tabela</span>
           <input v-model="searchInput" type="text" class="form-control" />
        </div>
      </div>

      <div class="col-md-6" >
        <button
          class="col-2 btn btn-primary"
          :disabled="selectedTableList.length == 0"
        >
          Continuar
        </button>

      </div>
    </div>

      <div class="container col-12 mt-3">
        <table class="table col-12">
          <thead>
            <tr>
              <th scope="col">Num.</th>
              <th scope="col">Tabela</th>
              <th scope="col">Marcada</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in filteredTableList" :key="index">
              <th scope="row">{{ index }}</th>
              <td>{{ item.tableName }}</td>
              <td><input type="checkbox" v-model="item.isSelected" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        v-if="isTableLoadingData"
        class="spinner-border center mx-auto col-12"
        role="status"
      ></div>
    </div>
</template>



<script setup>
import { ref, onMounted, computed } from "vue";

import { SqlServer } from "./../models/SqlServer.js";

/* Variaveis V-Model */
//Inicializada no hook "onMounted"
const tableList = ref([]);

const searchInput = ref("");
const filteredTableList = computed({
  get: () => {
    if (searchInput.value == "") {
      return tableList.value;
    }

    return tableList.value.filter((item) => {
      return item.tableName.search(searchInput.value.trim()) !== -1;
    });
  },
});
const selectedTableList = computed({
  get: () => {
    return tableList.value.filter((table) => {
      return table.isSelected;
    });
  },
});

/* Variaveis de controle */
const isTableLoadingData = ref(false);

/* Hooks */
onMounted(async () => {
  try {
    isTableLoadingData.value = true;

    const databaseConnection = null;
    const tableNames = await SqlServer.getTablesName({ databaseConnection });

    tableList.value = tableNames.map((tableName) => ({
      tableName,
      isSelected: false,
    }));

    isTableLoadingData.value = false;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style>
</style>