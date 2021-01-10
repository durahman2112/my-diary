<template>
  <v-app>
    <v-app-bar app flat>
        <v-app-bar-nav-icon @click="mini = !mini"></v-app-bar-nav-icon>
        <v-toolbar-title>My Diary and Journal</v-toolbar-title>
      <v-row>
        <v-col />
        <v-col class="d-flex justify-end mt-5" cols="12" sm="4 mt-2"> 
          <v-switch
            class="d-flex justify-end"
            v-model="$vuetify.theme.dark"
            inset
          ></v-switch>
        </v-col>
      </v-row>
    </v-app-bar>
    <side-nav :mini="mini" />
    <v-main>
      <v-container> 
        <router-view />
      </v-container>
      <footer-main />
    </v-main>
  </v-app>
</template>

<script>
import FooterMain from './components/FooterMain.vue';
import SideNav from './components/SideNav.vue';

export default {
  name: 'App',

  components: {
    SideNav,
    FooterMain,
  },

  data: () => ({
    mini: true
  })
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
*{
  font-family: "Poppins", Arial, Helvetica, sans-serif;
}
</style>
