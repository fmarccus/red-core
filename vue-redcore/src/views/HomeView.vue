<script setup>
import useLogin from '../composables/login';
const { logout } = useLogin();

const userToken = localStorage.getItem('token');
const authUser = localStorage.getItem('userName');
console.log(userToken);

</script>

<template>
  <main>
    <div class="container">
      <h3 class="mt-5">Welcome, {{ authUser }}</h3>
      <button @click="logout()" class="btn btn-dark"> Logout</button>
    </div>
  </main>
</template>
