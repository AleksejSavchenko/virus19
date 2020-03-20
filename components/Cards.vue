<template>
  <v-row dense class="pb-10">
    <v-col
      v-for="(item, i) in allInfo"
      :key="i"
      cols="12"
    >
      <v-card
        :color="item.color"
        dark
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title
              class="headline"
              v-text="item.label"
            ></v-card-title>

            <v-card-subtitle v-html="`${item.subtitle} <strong>${item.value}</strong>`"></v-card-subtitle>
          </div>

          <v-avatar
            class="ma-3"
            :size="mobile ? '80' : '125'"
            :tile="!mobile"
          >
            <v-img :src="item.img" v-if="item.img"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
  export default {
    props: {
      allInfo: {
        type: Object,
        default: undefined
      }
    },
    computed: {
      mobile() {
        return this.$store.state.mobile
      }
    }
  }
</script>
