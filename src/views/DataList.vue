<template>
  <div>
     <v-card
    class="mx-auto"
    max-height="200"
    height="200"
    flat
    outlined
    > 
    <v-row>
      <v-col cols="6" sm="6" lg="8" md="8">
        <v-card-title class="mt-5"><h2>Hello Durahman!</h2></v-card-title>
        <v-card-subtitle>
          Selamat Datang di Diary App
        </v-card-subtitle>
        <!-- <v-divider class="py-1" /> -->
        <v-btn
        class="pa-4 ml-4 mt-2"
          depressed
          color="primary"
        >
        <v-icon class="mr-2"> 
          mdi-plus
        </v-icon>
          New Diary
      </v-btn>
      </v-col>
      <v-col cols="6" sm="6" lg="4" md="4">
        <v-img
          class="white--text align-end"
          height="200"
          src="../assets/HelloImage.svg"
        >
        </v-img>
      </v-col>
    </v-row>
    
    </v-card>
    <br>
    <v-row>
      <v-col cols="8" lg="10" md="8" sm="8">
        <h3 class="py-2">Newest Diary</h3>
      </v-col>
      <v-col cols="4" lg="2" md="4" sm="4">
        <router-link to="#" class="text-decoration-none">
          <v-btn
            color="blue-grey"
            right
            small
            text
            class="ma-2 white--text"
            @click="loader = 'loading3'"
          >
            More
            <v-icon
              right
              dark
            >
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="4" v-for="i in 10" :key="i">
        <card />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
  components: { Card },

}
</script>

<style>

</style>