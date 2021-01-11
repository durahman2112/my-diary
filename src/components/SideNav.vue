<template>
  <v-navigation-drawer v-model="draw" :mini-variant.sync="mini" app>
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar color="primary">
          <v-img src=""></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            Sandra Adams
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item-group v-model="selectedItem" color="primary">
        <router-link
          v-for="(item, i) in menus"
          :key="'A' + i"
          :to="{ name: item.route }"
          class="text-decoration-none"
        >
          <v-list-item class="my-1">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <v-divider />
        <router-link
          :to="{ name: item.route }"
          class="text-decoration-none"
          v-for="(item, x) in settings"
          :key="x"
        >
          <v-list-item class="my-1">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list-item-group>
      <br />
    </v-list>
    <v-divider />
    <v-footer inset class="pl-0 pr-0" rounded="lg" color="transparent">
      <v-list-item @click="mini = !mini">
        <v-list-item-icon v-if="!mini">
          <v-icon>mdi-arrow-collapse-left</v-icon>
        </v-list-item-icon>
        <v-list-item-icon v-if="mini">
          <v-icon>mdi-arrow-collapse-right</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="py-0">
          <v-list-item-title style="font-weight:500"
            ><small>Collapse</small></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-footer>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["drawer"],
  data() {
    return {
      mini: false,
      selectedItem: 0,
      draw: this.drawer,
      menus: [
        {
          text: "Dashboard",
          icon: "mdi-home-variant-outline",
          route: "Dashboard",
        },
        { text: "My Diary", icon: "mdi-book-open-outline", route: "MyDiary" },
        { text: "History", icon: "mdi-book-clock-outline", route: "History" },
        { text: "Random Diary", icon: "mdi-sync", route: "RandomDiary" },
        {
          text: "My Emotion",
          icon: "mdi-emoticon-outline",
          route: "MyEmotion",
        },
      ],
      settings: [
        {
          text: "Profile",
          icon: "mdi-account-circle-outline",
          route: "Profile",
        },
        { text: "About Us", icon: "mdi-information-outline", route: "AboutUs" },
        { text: "Log Out", icon: "mdi-logout" },
      ],
    };
  },
  watch: {
    drawer(newVal, oldVal) {}, // watch it
    // //   console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    // }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style></style>
