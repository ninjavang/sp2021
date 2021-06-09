<template>
  <section class="r-stretch" data-transition="fade-in" data-background-image="static/gif/tenor.gif">
    <div class="r-stretch">
      <img class="logo" data-src="static/img/logo.png"  v-show="showImage" alt="">
      <p v-show="showText">Sommarpokalen</p>
      <p v-show="showYear">2021</p>
    </div>

    <!-- <transition name="fade">
      
    </transition>

    <transition name="fade">
      <div v-show="showText">
        <p>Sommarpokalen</p>
        <p>2021</p>
      </div>
    </transition> -->

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Reveal from 'reveal.js';

export default defineComponent({
  name: 'Intro',
  props: {
    showImage: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    showYear: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.logo {
  width: 50%;
 // height: 480px;
}
.__container {
  min-width: 100% !important;
  min-height: 100% !important;
  background: blue
}

// .fade-enter-active {
//   transition: opacity 3s ease-in-out;
// }

// .fade-enter-to {
//   opacity: 1;
// }

// .fade-enter {
//   opacity: 0;
// }

</style>