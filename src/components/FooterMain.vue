<template>
  <v-footer
    style="background: url(../assets/OkImage.svg); background-size:cover"
    color="primary"
    padless
  >
    <!-- <img src="../assets/OkImage.svg" height="400px" alt="" srcset="" /> -->
    <v-container>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="primary py-4 text-left white--text" cols="12">
          <v-row>
            <v-col cols="12" sm="12" lg="3" md="3">
              <h2>Diary App</h2>
              <small
                >Ceritakan hidupmu disini, karena hidupmu berharga kenanganmu
                akan selalu disimpan</small
              >
            </v-col>
            <v-col cols="12" sm="12" lg="2" md="2"> </v-col>
            <v-col cols="12" sm="12" lg="4" md="4">
              <h4>Anjay</h4>
              <small class="white--text px-20">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit
                amet. Mauris cursus commodo interdum. Praesent ut risus eget
                metus luctus accumsan id ultrices nunc.
              </small>
            </v-col>
            <v-col cols="12" lg="2" md="2" />
            <v-col cols="12" sm="12" lg="1" md="1">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    outlined
                    @click="backToTop()"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon dark>
                      mdi-arrow-up
                    </v-icon>
                  </v-btn>
                </template>
                <span>Back to Top</span>
              </v-tooltip>
            </v-col>
          </v-row>
          <br />
          <v-divider />
          <br />
          <v-row>
            <v-col cols="12" sm="12" lg="6" md="6">
              <v-tooltip top v-for="icon in icons" :key="icon.icon">
                <template v-slot:activator="{ on, attrs }">
                  <a :href="icon.link" target="_blank">
                    <v-btn
                      class="mx-4 white--text"
                      icon
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon size="24px">
                        {{ icon.icon }}
                      </v-icon>
                    </v-btn>
                  </a>
                </template>
                <span>{{ icon.name }}</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="mx-4 white--text" icon v-bind="attrs" v-on="on">
                    <a href="http://dribbble.com/durahman_fa" target="_blank">
                      <img width="24px" src="../assets/dribbble.svg" />
                    </a>
                  </v-btn>
                </template>
                <span>Dribbble</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="mx-4 white--text" icon v-bind="attrs" v-on="on">
                    <a href="http://dribbble.com/durahman_fa" target="_blank">
                      <img width="24px" src="../assets/behance.svg" />
                    </a>
                  </v-btn>
                </template>
                <span>Behance</span>
              </v-tooltip>
            </v-col>
            <v-col
              class="text-right"
              cols="12"
              sm="12 text-center"
              lg="6"
              md="6"
            >
              Copyright &nbsp; Durahman Firmansyah -
              {{ new Date().getFullYear() }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: "Github",
        icon: "mdi-github",
        link: "https://github.com/durahman2112",
      },
      {
        name: "Twitter",
        icon: "mdi-twitter",
        link: "https://twitter.com/durahman_fa",
      },
      {
        name: "LinkedIn",
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/durahmanfa/",
      },
      {
        name: "Instagram",
        icon: "mdi-instagram",
        link: "https://instagram.com/durahman_fa",
      },
      {
        name: "Email Me",
        icon: "mdi-email",
        link: "mailto:business.durahmanfa@gmail.com",
      },
    ],
    links: [
      "Dashboard",
      "Profile",
      "History",
      "Random Diary",
      "About Us",
      "Team",
      "Contact Us",
    ],
  }),
  methods: {
    backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style></style>
