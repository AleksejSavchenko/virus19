<template>
  <v-app dark>
    <v-app-bar
      app
      fixed
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <v-bottom-navigation
        fixed
        grow
        hide-on-scroll
        scroll-threshold="1"
      >
        <v-btn :key="idx" :to="item.to"
               v-for="(item, idx) in items"
               value="main"
               exact
               router
        >
          <span>{{item.title}}</span>
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>
  const WIDTH_MOBILE_VERSION = 768
  export default {
    data() {
      return {
        mobile: false,
        clipped: false,
        drawer: false,
        fixed: true,
        bottomNav: 'main',
        items: [
          {
            icon: 'mdi-history',
            title: 'Загальна статистика',
            to: '/'
          },
          {
            icon: 'mdi-map-marker-radius',
            title: 'Статистика по країнам',
            to: '/countries'
          }
        ],
        title: 'COVID-19'
      }
    },
    methods: {
      handleResize() {
        this.mobile = document.documentElement.clientWidth < WIDTH_MOBILE_VERSION
      }
    },
    mounted() {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize)
    }
  }
</script>
<style lang="scss">
  .v-content__wrap {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: .2;
      z-index: 0;
      background: url("https://static.arabic.cnn.com/sites/default/files/styles/og_image/public/2020/03/13/images/coronavirus-fact-fiction-myths-fact-check.jpg?itok=RHGntYA4") no-repeat center;
    }
  }

</style>
