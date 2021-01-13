<template>
  <div>
    <card-welcome />
    <br />
    <v-row>
      <v-col cols="8" lg="10" md="8" sm="8">
        <h3 class="py-2">Newest Diary</h3>
      </v-col>
      <v-col cols="4" lg="2" md="4" sm="4">
        <router-link :to="{ name: 'MyDiary' }" class="text-decoration-none">
          <v-btn color="primary" right small text class="ma-2 white--text">
            More
            <v-icon right dark>
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <card :data="cardData" />
    <br />
  </div>
</template>

<script>
import Card from "../components/Card";
import CardWelcome from "../components/CardWelcome.vue";

export default {
  data() {
    return {
      cardData: [
        {
          id: "abc1",
          title: "A whole new world",
          date: "25-Nov-2020",
          place: "Tangerang Selatan",
          emotion: "Happy",
          img: `https://picsum.photos/500/300?image=${Math.floor(
            Math.random() * 100
          ) *
            5 +
            10}`,
        },
        {
          id: "abc2",
          title: "A whole new world",
          date: "25-Nov-2020",
          place: "Tangerang Selatan",
          emotion: "Happy",
          img: `https://picsum.photos/500/300?image=${Math.floor(
            Math.random() * 100
          ) *
            5 +
            10}`,
        },
        {
          id: "abc3",
          title: "A whole new world",
          date: "25-Nov-2020",
          place: "Tangerang Selatan",
          emotion: "Happy",
          img: `https://picsum.photos/500/300?image=${Math.floor(
            Math.random() * 100
          ) *
            5 +
            10}`,
        },
        {
          id: "abc4",
          title: "A whole new world",
          date: "25-Nov-2020",
          place: "Tangerang Selatan",
          Emotions: "Happy",
          img: `https://picsum.photos/500/300?image=${Math.floor(
            Math.random() * 100
          ) *
            5 +
            10}`,
        },
      ],
    };
  },
  components: {
    Card,
    CardWelcome,
  },
};
</script>

<style></style>
