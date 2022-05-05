<template>
  <div>
    <v-app>
      <v-main>
        <HeaderPage />
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import HeaderPage from "./components/HeaderPage.vue";
export default {
  name: "App",
  components: {
    HeaderPage,
  },
  data: () => ({
    //
  }),
};
</script>
