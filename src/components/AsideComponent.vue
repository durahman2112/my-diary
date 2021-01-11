<template>
  <div>
    <v-card
      v-for="diary in dataCount"
      :key="diary.title"
      class="mx-auto mb-5"
      max-height="80"
      height="80"
      flat
      outlined
    >
      <div class="pa-4">
        <v-row>
          <v-col cols="2">
            <v-avatar rounded size="40" :color="diary.color">
              <v-icon dark>
                {{ diary.icon }}
              </v-icon>
            </v-avatar>
          </v-col>
          <v-col cols="5"
            ><h4 class="pa-2">{{ diary.title }}</h4></v-col
          >
          <v-col cols="3">
            <h4
              class="pa-2 text-right"
              :class="diary.color + '--text'"
              :color="diary.color"
            >
              {{ diary.count }}
            </h4>
          </v-col>
          <v-col cols="2">
            <v-btn fab dark outlined small :color="diary.color">
              <v-icon dark>
                mdi-arrow-right
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataCount: [
        {
          title: "Total Diary",
          count: 215,
          icon: "mdi-book-open-page-variant",
          color: "primary",
        },
        {
          title: "Happy Day",
          count: 200,
          icon: "mdi-emoticon-lol",
          color: "warning",
        },
        {
          title: "Bad Day",
          count: 10,
          icon: "mdi-emoticon-cry",
          color: "success",
        },
        {
          title: "Angry Day",
          count: 5,
          icon: "mdi-emoticon-devil",
          color: "error",
        },
      ],
    };
  },
};
</script>

<style></style>
