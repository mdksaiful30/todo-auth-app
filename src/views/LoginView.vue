<script setup>
import {ref} from 'vue';
import { RouterLink } from 'vue-router';
import authStore from '../stores/authStore';

const auth = authStore();

const email = ref('admin@gmail.com');
const password = ref('123');

</script>

<template>
  <div class="bg-[#F9FAFB] h-screen w-screen flex items-center">
    <div class="h-max mx-auto flex flex-col items-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-[#4F46E5]">Login</h1>
        <p class="text-gray-600">Login to your account</p>
        Default Email: admin@gmail.com <br>
        password: 123
      </div>

      <div class="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
        <div>
          <label class="text-gray-600 font-bold inline-block pb-2" for="email">Email</label>
          <input v-model="email"  class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="admin@gmail.com">
        </div>
        <div>
          <label class="text-gray-600 font-bold inline-block pb-2" for="password">Password</label>
          <input v-model="password" class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******">
        </div>
        <div>
          <input @click="auth.login(email,password)"  class="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" value="Login" >
        </div>
        <div>
          <p class="text-center">
            Don't have an account? <span class="font-bold text-[#4F46E5]"><router-link to="/register">Register now</router-link></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>