<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4" align="center">
        <v-icon size="200">mdi-account-circle</v-icon>
      </v-col>
      <v-col cols="12" md="8" align="center">
        <div class="text-h3">멋진 Vue를 만들었어요</div>
        <div class="text-h6">앞으로 멋진 개발자가 될거에요</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    var1: "",
    var2: "",
    result: "",
  }),
  methods: {
    onResultClick() {
      this.result = this.var1 + this.var2;
    },
  },
};
</script>

<style></style>

https://vuetifyjs.com/
