<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Список пользователей</h1>
    <div class="flex flex-wrap -mx-2">
      <div v-for="user in users" :key="user.id" class="w-1/5 px-2 mb-4">
        <div class="flex items-center">
          <img :src="getUserAvatar(user.id)" :alt="user.name" class="w-8 h-8 rounded-full">
          <router-link :to="{ name: 'User', params: { id: user.id } }" class="text-black hover:underline">{{ user.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    getUserAvatar(userId) {
      // Верните URL аватара пользователя или другую ссылку на изображение
      return `https://i.pravatar.cc/100?img=${userId}`;
    },
  },
};
</script>

<style>
a {
  color: black;
  text-decoration: none;
}
</style>
