<template>
  <div style="background:#080344">
    <v-row>
      <v-col cols="12 order-2" sm="12" lg="6 order-1" md="6 order-1">
        <img
          src="../assets/404.svg"
          width="100%"
          height="100%"
          style="margin-top:-60px !important"
          alt=""
          srcset=""
        />
      </v-col>
      <v-col cols="12 order-1" sm="12" lg="6 order-2" md="6 order-2">
        <br />
        <div class="mt-10"></div>
        <h1
          style="font-size:150px;margin-top:90px !important"
          class="text-center white--text"
        >
          404
        </h1>
        <h1 class="text-center white--text mb-10">Page Not Found</h1>
        <div class="text-center">
          <v-btn
            depressed
            color="warning"
            height="50"
            width="200"
            @click="$router.push({ name: 'Dashboard' })"
          >
            <v-icon>
              mdi-arrow-left
            </v-icon>
            Back To Home
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
