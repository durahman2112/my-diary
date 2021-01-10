<template>
  <v-footer
    color="primary"
    padless
  >
  <v-container>

      <v-row
        justify="center"
        no-gutters
      >
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
        <v-col
          class="primary py-4 text-left white--text"
          cols="12"
        >
        <v-row>
          <v-col cols="12" sm="12" lg="3" md="3">
            <h2>Diary App</h2>
            <small>Ceritakan hidupmu disini, karena hidupmu berharga kenanganmu akan selalu disimpan</small>
          </v-col>
          <v-col cols="12" sm="12" lg="2" md="2">

          </v-col>
          <v-col cols="12" sm="12" lg="4" md="4">
            <h4>Anjay</h4>
            <small class="white--text px-20">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. 
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
        <br>
        <v-divider />
        <br>
        <v-row>
          <v-col cols="12" sm="12" lg="6" md="6">
            <v-tooltip top v-for="icon in icons" :key="icon.icon">
              <template v-slot:activator="{ on, attrs }" >
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
              </template>
              <span>{{ icon.name }}</span>
            </v-tooltip>
          </v-col>
          <v-col class="text-right" cols="12" sm="12 text-center" lg="6" md="6">
           Copyright &nbsp; Durahman Firmansyah - {{ new Date().getFullYear() }}
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
          name: 'Github',
          icon: 'mdi-github'
        },
        {
          name: 'Twitter',
          icon: 'mdi-twitter'
        },
        {
          name: 'LinkedIn',
          icon: 'mdi-linkedin'
        },
        {
          name: 'Instagram',
          icon: 'mdi-instagram'
        },
        {
          name: 'Email Me',
          icon: 'mdi-email'
        },
        {
          name: 'Behance',
          icon: 'fa-behance'
        },
        {
          name: 'Dribbble',
          icon: 'fa-dribbble'
        },
      ],
      links: [
        'Dashboard',
        'Profile',
        'History',
        'Random Diary',
        'About Us',
        'Team',
        'Contact Us',
      ],
    }),
    methods: {
      backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
}
</script>

<style>

</style>