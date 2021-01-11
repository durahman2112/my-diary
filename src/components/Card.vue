<template>
  <v-row>
    <v-col cols="6" sm="6" md="6" lg="4" v-for="d in data" :key="'A' + d.id">
      <router-link
        :to="{ path: '/diary/' + d.id }"
        class="text-decoration-none"
      >
        <v-card class="mx-auto" max-width="300" flat outlined>
          <v-img class="white--text align-end" height="150px" :src="d.img">
          </v-img>

          <v-card-title>{{ d.title }}</v-card-title>

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
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style></style>
