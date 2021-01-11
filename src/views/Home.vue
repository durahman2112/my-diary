<template>
  <div class="home">
    <v-container>
      <v-app-bar app flat>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
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
      <side-nav :drawer="drawer" />
      <v-row>
        <v-col cols="12" lg="8" sm="12">
          <router-view />
        </v-col>
        <v-col cols="12" lg="4" sm="12">
          <aside-component />
        </v-col>
      </v-row>
    </v-container>

    <footer-main />
  </div>
</template>

<script>
import AsideComponent from "../components/AsideComponent.vue";
import FooterMain from "../components/FooterMain.vue";
import SideNav from "../components/SideNav.vue";

export default {
  name: "Home",
  data: () => ({
    drawer: true,
  }),

  components: {
    AsideComponent,
    SideNav,
    FooterMain,
  },
};
</script>
