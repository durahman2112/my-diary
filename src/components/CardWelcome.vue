<template>
  <v-card class="mx-auto" flat outlined>
    <v-row class="d-flex flex-wrap-reverse">
      <v-col cols="12 order-2" sm="12 mb-5" lg="8 order-1" md="8 order-1">
        <v-card-title class="mt-5"><h2>Hello Durahman!</h2></v-card-title>
        <v-card-subtitle>
          Selamat Datang di Diary App
        </v-card-subtitle>
        <!-- <v-divider class="py-1" /> -->
        <router-link :to="{ name: 'NewDiary' }" class="text-decoration-none">
          <v-btn class="pa-4 ml-4 mt-2" depressed color="primary">
            <v-icon class="mr-2">
              mdi-plus
            </v-icon>
            New Diary
          </v-btn>
        </router-link>
      </v-col>
      <v-col cols="12 order-1" sm="4" lg="4 order-2" md="4 order-1">
        <v-img
          class="white--text align-end"
          height="200"
          src="../assets/HelloImage-2.svg"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
