<template>
  <div class="VueToNuxtLogo">
    <div class="img-bg"></div>
  </div>
</template>

<style lang="scss">
.VueToNuxtLogo {
  animation: turn 2s linear forwards .5s, hiding 1s linear forwards 3s, hidingByIndex 1s forwards 5s;
  position: absolute;
  transform: rotateX(180deg);
  overflow: hidden;
  height: calc(90vh - 64px - 10vh);
  width: 80%;
  left: 10%;
  top: 7vh;
  z-index: 333;
  opacity: 1;

  .img-bg {
    background: url("https://c10.patreonusercontent.com/3/eyJ3IjoxNjAwfQ%3D%3D/patreon-media/p/post/34653563/66b1d689a02a42a38cc54d0c08e3506e/1.png?token-time=1584837923&token-hash=ikwwRSZZR0_W2QBYdFTL0SaKgluEDkBpPTgsL9hbP0w%3D");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes hiding {
  30% {
    opacity: .7;
  }
  50% {
    opacity: .5;
  }
  70% {
    opacity: .3;
  }
  100% {
    opacity: 0;
    /*z-index: -2222;*/
  }
}
@keyframes hidingByIndex {
  100% {
    z-index: -2222;
  }
}
</style>
