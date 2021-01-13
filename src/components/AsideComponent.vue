<template>
  <div>
    <v-card flat height="200" class="mb-5 white--text">
      <v-img
        :src="
          `https://picsum.photos/500/300?image=${Math.floor(
            Math.random() * 100
          ) *
            5 +
            10}`
        "
        :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`"
        gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.5)"
        class="white--text align-end"
        height="200"
      >
        <v-card-title>
          <h2>{{ getDate() }}</h2>
        </v-card-title>
        <v-card-subtitle class="white--text">
          {{ time }}
        </v-card-subtitle>
      </v-img>
    </v-card>
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
          <v-col cols="7"
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
          <!-- <v-col cols="2">
            <v-btn fab dark outlined small :color="diary.color">
              <v-icon dark>
                mdi-arrow-right
              </v-icon>
            </v-btn>
          </v-col> -->
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: null,
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
  methods: {
    getDate() {
      const d = new Date();
      // const day = d.getDay();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const x = d.getDate();
      const Month = d.getMonth();
      const Year = d.getFullYear();
      return x + " " + months[Month] + " " + Year;
    },
    getWaktu() {
      setInterval(() => {
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        // console.log(h + ":" + m + ":" + s);
        this.time = h + ":" + m + ":" + s;
      }, 1000);
    },
  },
  computed() {
    this.getWaktu();
  },
};
</script>

<style></style>
