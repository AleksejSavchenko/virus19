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
      :items="data"
      :search="search"
    ></v-data-table>
  </v-card>

  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Cards from '~/components/Cards.vue'
import EventService from './../services/EventService'

const objInfo = {
  cases: {
    label: 'Випадків',
    subtitle: 'Скільки випадків зараження було виявлено:',
    color: '#3a687d',
    img: 'https://img.pravda.com/images/doc/3/e/3e42234-8ecf50c0b8bf891254c3bf0c71914100-ce-3000x3000x543x0-cropped-800x800--1-.jpg'
  },
  deaths: {
    label: 'Смертей',
    subtitle: 'Скільки летальних випадків:',
    color: '#870709',
    img: 'https://i1.poltava.to/uploads/2020/03/2020-03-13/03.jpg'
  },
  recovered: {
    label: 'Вилікувалось',
    subtitle: 'Скільки людей одужало після зараження:',
    color: '#00a520',
    img: 'https://lh3.googleusercontent.com/proxy/NqSs9Mo9gY-zqP0kOETW-JnqC5i1qmZSreecto6gxAOl9x38QH-JVq_f_0xn7-81Oem0JXF96ZpFz_GV385H1lpuF7n7V454lkD9JaE'
  },
  updated: {
    label: 'Оновлено',
    subtitle: 'Останній час та дата оновлення інформації:',
    color: '#1f647b',
    img: 'https://lh3.googleusercontent.com/proxy/gvlt3O0GDHbqxN67fMJkSZfFZ5Qtr_n14lJwl08DGj-pkSgUl7KTtFmIvWsDlCeMhy4GACeTKGjibeghkJLUVSseQrqzQqH0IhushY6f1-HhMpMGzke3nWwZ2i7qJdZ0Xm-bw-BvsGLX02avTnxJdxmEZeul'
  }
};

export default {
  components: {
    Logo,
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
  async asyncData() {
    const { data } = await EventService.getByCountriesInfo()
    return {
      data
    }
  },
  methods: {

  },
  computed: {
    preparedData() {
      const result = {};
      Object.keys(this.allInfo).forEach(item => {
        result[item] = {
          ...objInfo[item],
          value: this.allInfo[item]
        }
      })

      result.updated.value = this.$moment(result.updated.value).format('HH:MM:SS DD/MM/YYYY')
      return result;
    }
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
