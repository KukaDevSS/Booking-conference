<template>
    <div class="mt-2">
      <!-- <router-link to="/table"><button class="btn btn-primary ms-4"><i class="bi bi-arrow-left-circle-fill me-2"></i>ໜ້າຫຼັກ</button></router-link> -->
      <div class="container col-lg-6 shadow-lg rounded">
        <div class="py-4">
          <h3 class="text-center fw-bold">ສ້າງຫ້ອງ</h3>
        </div>
        <form @submit.prevent="createRoom" action="" class="mx-4 pb-5">
          <div class="my-4">
            <label for="imageInput">Add image</label>
            <input id="imageInput" type="file" ref="imageInput" @change="handleImageChange" class="form-control">
          </div>
          <div class="mt-4">
            <label for="">ຊື່ຫ້ອງ</label>
            <input v-model="title_room" type="text" class="form-control">
          </div>
          <div class="mt-4">
            <label for="">ສະຖານທີ່</label>
            <input v-model="address" type="text" class="form-control">
          </div>
          <div class="mt-4">
            <label for="">ລາຍລະອຽດ</label>
            <input v-model="description" type="text" class="form-control">
          </div>
          <div class="mt-4 text-center">
            <router-link to="/rooms"><button type="submit" class="btn btn-danger col-lg-5 me-4">ຍົກເລີກ</button></router-link>
            <button type="submit" class="btn btn-primary col-lg-5">ສ້າງຫ້ອງ</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import Swal from 'sweetalert2';
  import { IP_api } from '../../API_config';
  
  export default {
    data() {
      return {
        title_room: '',
        address: '',
        description: '',
        roomNumber: '',   
        selectedImage: null,
      }
    },
    methods: {
      handleImageChange(event) {
        this.selectedImage = event.target.files[0];
      },
      redirectToBack(){
        this.$router.push('/table');
      },
      async createRoom() {
        const formData = {
          title_room: this.title_room,
          address: this.address,
          description: this.description,
          roomNumber: this.roomNumber,
          image: this.selectedImage,
        };
  
        try {
          // const response = await fetch('http://172.22.4.41:3000/rooms/create', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify(formData),
          // });
          const response = await axios.post(`${IP_api}/rooms/create`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          if (response.status === 201) {
            Swal.fire('ການສ້າງຫ້ອງຂອງທ່ານສຳເລັດ', '', 'success').then(()=> {
              this.$router.push('/rooms');
            });
          } else {
            Swal.fire('An error occurred', '', 'error');
          }
        } catch (error) {
          console.error('Error posting data:', error);
        }
      },
    },
  }
  </script>
  
  <style>
  
  </style>