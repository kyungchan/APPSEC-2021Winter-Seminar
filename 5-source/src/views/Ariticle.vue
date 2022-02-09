<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-h5 font-weight-bold">게시글</v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-row>
              <v-col cols="12" class="pb-0">{{ ariticle.title }}</v-col>
              <v-col cols="12" class="py-0 text-caption"
                >글ID: {{ $route.params.id }}</v-col
              >
              <v-col cols="12" class="py-0 text-caption"
                >글쓴이: {{ ariticle.author }}</v-col
              >
              <v-col cols="12" class="py-0 text-caption"
                >글쓴시간: {{ ariticle.createdAt }}</v-col
              >
            </v-row>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="text-body-1">
            {{ ariticle.content }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" v-for="comment in ariticle.comments" :key="comment.id">
        <v-card>
          <v-card-title> {{ comment.author }} </v-card-title>
          <v-card-text> {{ comment.content }} </v-card-text>
          <v-card-actions>
            <v-btn icon color="primary" @click="onCommentDelete(comment._id)"
              ><v-icon> mdi-delete</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title> 댓글 작성 </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="newComment.author"
              outlined
              label="댓글 작성자"
            ></v-text-field>
            <v-textarea v-model="newComment.content" outlined label="댓글 본문">
            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="onNewComment">작성</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    onCommentDelete(id) {
      this.$axios
        .delete(`/api/board/${this.$route.params.id}/${id}`)
        .then(() => {
          alert("댓글이 삭제되었습니다.");
          this.$axios
            .get(`/api/board/${this.$route.params.id}`)
            .then((result) => {
              this.ariticle = result.data;
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          alert("오류 발생");
        });
    },
    onNewComment() {
      this.$axios
        .post(`/api/board/${this.$route.params.id}`, this.newComment)
        .then(() => {
          alert("댓글 작성 완료");
          this.newComment = {
            author: "",
            content: "",
          };
          this.$axios
            .get(`/api/board/${this.$route.params.id}`)
            .then((result) => {
              this.ariticle = result.data;
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.$axios
      .get(`/api/board/${this.$route.params.id}`)
      .then((result) => {
        this.ariticle = result.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data: () => ({
    newComment: {
      author: "",
      content: "",
    },
    ariticle: {
      title: "글제목",
      author: "홍길동",
      createdAt: "2022-01-16 11:50:00",
    },
    comment: [
      { id: 1, author: "홍길동", comment: "최고에요", password: "1234" },
      { id: 2, author: "박미선", comment: "너무 좋아요", password: "abcd" },
      {
        id: 3,
        author: "김철수",
        comment: "댓글 달았습니다.",
        password: "eeee",
      },
      { id: 4, author: "이민자", comment: "Hello", password: "asdf" },
    ],
  }),
};
</script>

<style></style>
