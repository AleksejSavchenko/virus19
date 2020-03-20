<template>
  <v-layout
    align-center
    column
    justify-center
  >

    <v-flex xs12 sm6 md4>
      <logo />
    </v-flex>

    <v-flex xs12 sm6 md4>
      <Cards :allInfo="this.preparedData" />
    </v-flex>
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
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq5WXYnAtN0_EmYkE6aDlFhU5CGhiStZr-yme-7gpaIulzT520'
  },
  updated: {
    label: 'Оновлено',
    subtitle: 'Останній час та дата оновлення інформації:',
    color: '#1f647b',
  }
};

export default {
  components: {
    Logo,
    Cards
  },
  async fetch ({ store }) {
    let { data } = await EventService.getCommonData()
    store.commit('SET_COMMON_DATA', data)
  },
  computed: {
    preparedData() {
      const result = {};
      const commonData = this.$store.state.commonData;
      Object.keys(commonData).forEach(item => {
        result[item] = {
          ...objInfo[item],
          value: commonData[item]
        }
      })

      result.updated.value = this.$moment(result.updated.value).format('HH:MM:SS DD/MM/YYYY')
      return result;
    }
  },
}
</script>

<style lang="scss">

  /*.v-card {*/
  /*  position: relative;*/
  /*  opacity: 0;*/
  /*  animation: show 1s linear forwards 5s;*/
  /*}*/


  /*@keyframes show {*/
  /*  100% {*/
  /*    opacity: 1;*/
  /*  }*/
  /*}*/
</style>
