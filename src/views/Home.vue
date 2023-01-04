<template>
  <div>
    <header>
      <h1>Users</h1>
    </header>
    <main>
      <User v-for="(user, index) in user_list" :key="index" :user="user" />
      <div v-if="show_spinner" class="loader"></div>
    </main>
  </div>
</template>

<script>
import User from "@/components/User";
import Repository from "@/repositories/RepositoryFactory";
const UserRepository = Repository.get("users");

export default {
  name: "Home",
  data() {
    return {
      user_list: [],
      limit: 20,
      show_spinner: false
    };
  },
  components: {
    User,
  },
  methods: {
    getUsers() {
      this.show_spinner = true;
      var params = { results: this.limit };
      UserRepository
        .getUsers(params)
        .then((response) => {
          this.user_list.push(...response.data.results);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.show_spinner = false;
        });
    },
    handleScroll() {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.getUsers();
      }
    },
  },
  mounted() {
    this.getUsers();
    window.onscroll = this.handleScroll;
  },
};
</script>

