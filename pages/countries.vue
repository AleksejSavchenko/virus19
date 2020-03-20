<template>
  <v-layout
    align-center
    column
    justify-center
  >

  <v-card id="data-table-countries" class="pb-10">
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="countriesData"
      :search="search"
    ></v-data-table>
  </v-card>

  </v-layout>
</template>

<script>
import Cards from '~/components/Cards.vue'
import EventService from './../services/EventService'

export default {
  components: {
    Cards
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Країна',
        align: 'start',
        value: 'country',
      },
      { text: 'Випадків', value: 'cases' },
      { text: 'Випадків за сьогодні', value: 'todayCases' },
      { text: 'Померло', value: 'deaths' },
      { text: 'Померло за сьогодні', value: 'todayDeaths' },
      { text: 'Вилікувалось', value: 'recovered' },
      { text: 'Хворих', value: 'active' },
      { text: 'Хворих критично', value: 'critical' },
      { text: 'Випадків на 1 мільон населення', value: 'casesPerOneMillion' },
    ]
  }),
  async fetch ({ store }) {
    let { data } = await EventService.getCountriesData()
    store.commit('SET_COUNTRIES_DATA', data)
  },
  computed: {
    countriesData() {
      return this.$store.state.countriesData || []
    },
  }
}
</script>

<style lang="scss" scoped>
 #data-table-countries {
   .v-card {
     position: relative;
     opacity: 0;
     animation: show 1s linear forwards .25s;
   }


   @keyframes show {
     100% {
       opacity: 1;
     }
   }
 }
</style>
