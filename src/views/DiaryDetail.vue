<template>
  <div>
    <v-card flat rounded="true" style="letter-spacing:0.3px;line-height:25px">
      <v-img
        :src="data.img"
        :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`"
        aspect-ratio="16/9"
        max-height="300"
        height="300"
        class="white--text align-end"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
        <v-card-title>
          <!-- <h1>{{ data.title }}</h1> -->
          <!-- <v-spacer /> -->
        </v-card-title>

        <v-card-subtitle class="white--text mt-3 mb-2">
          <!-- &nbsp;{{ data.date }} -->
        </v-card-subtitle>
      </v-img>
    </v-card>
    <v-card flat outlined rounded="true" style="margin-top:10px !important">
      <v-container>
        <v-card-subtitle>
          <v-chip color="warning" label>
            <v-icon small class="mr-2">
              mdi-emoticon-lol
            </v-icon>
            {{ data.emotion }}
          </v-chip>
        </v-card-subtitle>
        <v-card-title>
          <h2 style="font-weight:bold;">{{ data.title }}</h2>
          <v-card flat width="100%" class="mt-5 mb-10" style="font-size: 12px">
            <div>
              <v-icon class="mr-2" small>
                mdi-calendar-outline
              </v-icon>
              <span class="mr-5">{{ data.date }}</span>
            </div>
            <div>
              <v-icon class="mr-2" small>
                mdi-map-marker-circle
              </v-icon>
              <span>{{ data.place }}</span>
            </div>
            <v-row>
              <!-- <v-col cols="3" sm="3" lg="1" md="1">
                <v-avatar class="mt-1">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="9" sm="9" lg="11" md="11" class="p-0">
                <v-col cols="12" sm="12" class="pt-0 pl-0">
                  <h5>Durahman Firmansyah</h5>
                </v-col> -->
              <!-- <v-col
                cols="12"
                sm="12"
                style="margin-top:-30px"
                class="pb-0 pl-0"
              >
              </v-col> -->
              <!-- </v-col> -->
            </v-row>
          </v-card>
        </v-card-title>
        <v-card-text>
          <p style="letter-spacing:0.3px;line-height:25px">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut aliquam
            quae ex laboriosam quam perspiciatis quasi impedit autem facilis
            temporibus inventore earum aperiam nostrum numquam nesciunt
            doloremque quos, expedita voluptatem distinctio, eaque illo commodi
            dolores. Corporis id cum quaerat fugiat dolorum quos ratione, ipsa
            illo nihil? Dolor officiis nisi aut ab a atque, sunt labore harum
            aspernatur reprehenderit velit nesciunt nulla ducimus ipsa illo
            aliquam doloribus ad nihil cum amet quaerat! Recusandae nulla
            dolores nesciunt voluptatibus, quae aut architecto sequi
            consequuntur quam odio officiis iste totam quia sunt a eligendi illo
            numquam aliquid, tenetur doloribus. Reprehenderit dolor unde
            repellendus repellat?
          </p>
        </v-card-text>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["id", "data"],
};
</script>

<style></style>
