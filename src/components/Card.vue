<template>
  <v-row>
    <v-col cols="6" sm="6" md="4" lg="4" v-for="d in data" :key="'A' + d.id">
      <v-hover v-slot="{ hover }">
        <router-link
          :to="{ name: 'DiaryDetail', params: { id: d.id, data: d } }"
          class="text-decoration-none"
        >
          <v-card
            class="mx-auto"
            max-width="300"
            flat
            outlined
            :elevation="hover ? 12 : 0"
            :class="{ 'on-hover': hover }"
          >
            <v-img class="white--text align-end" height="150px" :src="d.img">
            </v-img>

            <v-card-title
              ><h5>{{ d.title }}</h5></v-card-title
            >

            <v-card-subtitle class="pb-0">
              {{ d.date }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ d.place }}</div>
              <div>
                <v-avatar color="primary" size="10"></v-avatar>
                <small>
                  {{ d.emotion }}
                </small>
              </div>
            </v-card-text>
          </v-card>
        </router-link>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style></style>
