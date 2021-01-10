<template>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
    >
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

        <v-list
        nav
        dense
        >
            <v-list-item-group
            v-model="selectedItem"
            color="primary"
            >
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
            >
                <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: ['mini'],
    data (){
        return {
            drawer: true,
            selectedItem: 0,
            items: [
                { text: 'Dashboard', icon: 'mdi-home' },
                { text: 'Profile', icon: 'mdi-account' },
                { text: 'History', icon: 'mdi-history' },
            ],
        }
    },
    watch : {
        // drawer(newVal, oldVal){ // watch it
        // //   console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        // }
    }

}
</script>

<style>

</style>