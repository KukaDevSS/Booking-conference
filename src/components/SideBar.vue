<template>
    <div class="col-2 vh-100 shadow-lg p-0 w-100" style="background-color: #59c1bd;">
      <p class="fw-bold text-center mt-2 pt-4 text-white">Dashboard</p>
          <div class="mt-4 mx-2">
              <router-link to="/admin" class="btn btn-outline-light w-100 rounded text-start ps-5">
                  <i class="bi bi-table"></i> ຈັດການການຈອງ
              </router-link>
          </div>
          <div class="mt-4 mx-2">
              <router-link to="/rooms" class="btn btn-outline-light w-100 rounded text-start ps-5">
                  <i class="bi bi-columns-gap"></i> ຈັດການຫ້ອງ
              </router-link>
          </div>
      </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  .btn-outline-light:hover{
      background-color: #0d4c92;
      color: white;
      border: 1px solid #0d4c92;
  }
  </style>
  
  