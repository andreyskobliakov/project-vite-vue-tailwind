<template>
  <div>
    <h2>{{ user.name }}</h2>
    <p>Email: {{ user.email }}</p>
    <p>Phone: {{ user.phone }}</p>
    <!-- Добавьте другую информацию о пользователе -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      const userId = this.$route.params.id;
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          this.user = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
