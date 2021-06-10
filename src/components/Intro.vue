<template>
  <section class="__column intro" data-transition="fade-out">
    <span>
      1. Ta dig en öl, kaffe eller glas vatten beroende dagsform
    </span>
    <span>
      2. Sätt på dig hörlurarna och pumpa upp volymen
    </span>
    <span>
      3. Du kan nu luta dig tillbaka och koppla av.<br>
    </span>
    <span>
      Skulle du tycka det går för segt kan du alltid trycka "space" för att hoppa vidare.
    </span>
    <span class="highlight-red">
      Press "Space" to continue..
    </span>
  </section>

  <section class="r-stretch" data-transition="fade-in" data-background-image="static/gif/tenor.gif">
    <div class="r-stretch" style="display: flex; flex-direction:column; align-items: center;">
      <img class="logo" data-src="static/img/logo.png"  v-show="showImage" alt="">
      <div style="display: flex; align-items: center;">
        <img class="logo2" data-src="static/img/splogo.png" v-show="showText" alt="">
        <img class="logo3" data-src="static/img/2021.png"  v-show="showYear" alt="">
      </div>
    </div>
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
}
.logo2 {
  height: 160px;
  width: 620px;
  margin: 0;
}
.logo3 {
  height: 60px;
  width: 140px;
  margin: 20px 0 0 0.5em;
}

.rese-section {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.intro {
  span:nth-child(1) {
    margin: 2em 0;
  }
  span:nth-child(2) {
    margin: 0;
  }
  span:nth-child(3) {
    margin: 2em 0 0 0;
  }
  span:nth-child(4) {
    font-size: 16px;
    margin: 0 0 2em 0;
  }
}

</style>