<template>
  <div class="container2 row justify-content-between mt-3 mb-3">
    <p class="h1 col-4">Geração de DDL Hive</p>
    <button class="btn btn-primary col-1">Continuar</button>
  </div>
  <div class="container h-100 row">
    <div class="col-2 border">
      <p class="h1">Tabelas</p>
      <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
    <div class="row col-10">
      <div class="col-6 border">
        <p class="h1">DDL MSSQL</p>
        <table class="table col-12 ">
          <thead>
            <tr>
              <th scope="col">Nome da coluna</th>
              <th scope="col">Datatype</th>
              <th scope="col">Tamanho</th>
              <th scope="col">Escala</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>nRquisDemadTitular</td>
              <td>Decimal</td>
              <td>12</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-6 border">
        <p class="h1">DDL Hive</p>
        <table class="table col-12">
          <thead>
            <tr>
              <th scope="col">Nome da coluna</th>
              <th scope="col">Datatype</th>
              <th scope="col">Tamanho</th>
              <th scope="col">Escala</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>nRquisDemadTitular</td>
              <td>Decimal</td>
              <td>12</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>



<script setup>
//import { ref } from "vue"
</script>

<style>
</style>