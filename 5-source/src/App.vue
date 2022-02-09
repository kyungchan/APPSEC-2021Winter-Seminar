<template>
  <v-app>
    <v-app-bar app color="primary" dark
      ><v-icon left>mdi-pencil</v-icon>
      <v-app-bar-title class="mr-3">MyBoard</v-app-bar-title>
      <v-btn color="primary" depressed to="/">Home</v-btn>
      <v-btn color="primary" depressed to="/board">게시판</v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
