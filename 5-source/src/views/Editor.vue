<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        v-if="$route.params.id == null"
        class="text-h5 font-weight-bold"
        >게시글 작성</v-col
      >
      <v-col cols="12" v-else class="text-h5 font-weight-bold"
        >게시글 수정</v-col
      >
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12" class="py-0">
                <v-text-field
                  label="제목"
                  v-model="article.title"
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="py-0">
                <v-text-field
                  label="작성자"
                  v-model="article.author"
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="py-0">
                <v-text-field
                  label="비밀번호"
                  type="password"
                  v-model="article.password"
                ></v-text-field>
              </v-col>
              <v-col class="py-0" cols="12">
                <v-textarea
                  label="본문"
                  outlined
                  v-model="article.content"
                ></v-textarea
              ></v-col>
              <v-col cols="12" align="end">
                <v-btn color="primary" @click="onWrite">작성</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    onWrite() {
      this.$axios
        .post("/api/board", this.article)
        .then((result) => {
          alert("작성이 완료되었습니다.");
          this.$router.replace("/board/" + result.data._id);
        })
        .catch((err) => {
          console.log(err);
          alert("오류가 발생했습니다.");
        });
    },
  },
  data: () => ({
    article: {
      title: "",
      author: "",
      password: "",
      content: "",
    },
  }),
};
</script>

<style></style>
