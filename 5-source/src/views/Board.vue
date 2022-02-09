<template>
  <v-container>
    <v-row>
      <v-col cols="10" class="text-h5 font-weight-bold">게시판</v-col>
      <v-spacer></v-spacer>
      <v-col align="end" cols="2">
        <v-btn color="primary" @click="onEditorClick">
          <v-icon left>mdi-pencil</v-icon>글쓰기</v-btn
        ></v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-text-field label="Search" v-model="search"></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="articles"
            :search="search"
            @click:row="onRowClick"
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.$axios
      .get("/api/board")
      .then((result) => {
        this.articles = result.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  name: "Home",
  data: () => ({
    search: "",
    headers: [
      {
        text: "Title",
        value: "title",
      },
      {
        text: "Author",
        value: "author",
      },
      {
        text: "Created At",
        value: "createdAt",
      },
    ],
    articles: [
      {
        id: 0,
        title: "테스트1",
        author: "김민수",
        createdAt: "2022-01-25",
      },
      {
        id: 1,
        title: "테스트2",
        author: "박민철",
        createdAt: "2022-01-27",
      },
      {
        id: 3,
        title: "테스트3",
        author: "제시카",
        createdAt: "2022-02-25",
      },
      {
        id: 4,
        title: "테스트4",
        author: "김경찬",
        createdAt: "2022-03-11",
      },
    ],
  }),
  methods: {
    onRowClick(item) {
      this.$router.push(`./board/${item._id}`);
    },
    onEditorClick() {
      this.$router.push("/board/editor");
    },
  },
  components: {},
};
</script>
