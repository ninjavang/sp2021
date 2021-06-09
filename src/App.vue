<template>
  <div class="app">
    <span></span>
    <div class="reveal">
      <div class="slides">
        <Intro/>
        <Resan/>
        <Tavlingen/>
        <Team 
          v-for="(team, idx) in teams"
          :key="idx"
          :team="team"
        />
        <Avslutningen />
        <section>
          <h2>Tack och adjö!</h2>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import Tavlingen from '@/components/Tavlingen.vue';
import Team from '@/components/Team.vue';
import Intro from '@/components/Intro.vue';
import Resan from '@/components/Resan.vue';
import Avslutningen from '@/components/Avslutningen.vue';
import Reveal from 'reveal.js';
import teamData from '@/teams.data';

export default defineComponent({
  name: 'App',

  components: {
    Tavlingen,
    Intro,
    Resan,
    Team,
    Avslutningen
  },

  data() {
    return {
      teams: teamData
    }
  },

  mounted() {
    Reveal.initialize({
      autoPlayMedia: true,
      controlsLayout: 'edges'
    });
  }
});
</script>

<style style="scss">
@import url('../node_modules/reveal.js/dist/reveal.css');
@import url('../node_modules/reveal.js/dist/theme/black.css');
@font-face {
    font-family: "Backslash";
    src: "../public/static/fonts/Backslash-RpJol.otf" format("otf");
}

#app {
  height: 100%;
}
.app {
  height: 100%;
}
.iframe {
  height: 100%;
  width: 100%;
}
.__column {
  display: flex !important;
  flex-direction: column;
}

</style>
